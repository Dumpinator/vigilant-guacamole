import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Test the portfolio itself without depending on font/CDN availability.
  await page.route(/^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)\//, route =>
    route.fulfill({ status: 200, contentType: 'text/css', body: '' }));
});

const pages = [
  ['/', '.home__container', 'Je transforme des'],
  ['/about', '.about__container', 'Mon parcours'],
  ['/lelab', '.lab__container', 'The Cacatoes Theory'],
  ['/projet/freepry1', '.project__container', 'Contexte'],
  ['/projet/freepry2', '.project__container', 'Contexte'],
  ['/projet/lichess', '.project__container', 'Research'],
];

for (const [route, container, text] of pages) {
  test(`page ${route}: React renders and project images load`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route);
    expect(response.status()).toBe(200);
    await expect(page.locator(container)).toBeVisible();
    await expect(page.locator(container)).toContainText(text);
    await page.waitForLoadState('networkidle');
    await expect.poll(() => page.locator(`${container} img`).evaluateAll(images =>
      images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute('src'))
    )).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('project carousel loops and opens the selected case study', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/projets');
  const carousel = page.locator('.example-container');
  const selectedProject = carousel.locator('a');

  await expect(selectedProject).toHaveAttribute('href', '/projet/freepry1');
  await carousel.locator('.command .next').click();
  await expect(selectedProject).toHaveAttribute('href', '/projet/lichess');
  await expect(carousel.locator('h1')).toHaveText(/débutants/);
  await carousel.locator('.command .next').click();
  await expect(selectedProject).toHaveAttribute('href', '/projet/freepry2');
  await carousel.locator('.command .next').click();
  await expect(selectedProject).toHaveAttribute('href', '/projet/freepry1');
  await carousel.locator('.command .prev').click();
  await expect(selectedProject).toHaveAttribute('href', '/projet/freepry2');
  await expect(selectedProject.locator('img')).toHaveCount(1);
  await selectedProject.locator('img').click();
  await expect(page).toHaveURL(/\/projet\/freepry2$/);
  await expect(page.locator('.project__container')).toContainText('back-office');
  expect(errors).toEqual([]);
});

test('published artifact contains the CV and the Netlify SPA fallback', async ({ request }) => {
  const cv = await request.get('/cv.pdf');
  expect(cv.status()).toBe(200);
  expect(cv.headers()['content-type']).toContain('application/pdf');
  expect((await cv.body()).subarray(0, 5).toString()).toBe('%PDF-');

  const redirects = await request.get('/_redirects');
  expect(redirects.status()).toBe(200);
  expect((await redirects.text()).trim()).toBe('/* /index.html 200');
});
