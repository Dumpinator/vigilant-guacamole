# Build et déploiement Netlify

Le workflow [Portfolio CI and Netlify](../.github/workflows/portfolio.yml) suit
une chaîne simple : **installation des dépendances → build → publication**.

- Les pushes et pull requests lancent `npm ci --legacy-peer-deps`, puis
  `npm run build` dans `myBook2023/`.
- Si le build échoue, la publication ne s'exécute pas.
- Si le build réussit, un push sur `main` publie `myBook2023/dist/` sur le
  projet Netlify existant. Le lancement manuel sur `main` fait de même.
- Les autres branches et les pull requests compilent sans publier.
- Il n'y a ni Playwright, ni Chromium, ni tests navigateur, ni archivage
  d'artefacts. Netlify CLI est exécuté uniquement lors de la publication,
  avec une version fixée et `--no-build` pour ne pas recompiler.

Le build vérifie la compilation et les imports. Il ne garantit pas l'absence
d'erreurs React qui se produisent uniquement à l'exécution dans le navigateur.

## Réglages GitHub

Dans [Settings > Secrets and variables > Actions > Secrets](https://github.com/Dumpinator/vigilant-guacamole/settings/secrets/actions),
conserver ces deux **Repository secrets** :

| Nom | Valeur |
| --- | --- |
| `NETLIFY_AUTH_TOKEN` | Jeton personnel Netlify autorisé à publier le projet |
| `NETLIFY_SITE_ID` | Project ID du projet Netlify `delphine-gaspar` |

Le YAML contient uniquement leurs références `secrets.…`, jamais leurs valeurs.
Aucun fichier `.env` n'est nécessaire pour le déploiement.

Sur Netlify, arrêter les builds Git automatiques s'ils sont actifs :
**Project configuration > Developer settings > Continuous deployment > Build
settings > Configure > Build status > Stopped builds**. La CLI peut toujours
publier les fichiers compilés par GitHub. Cela évite une publication native
indépendante du résultat du build GitHub.

Commiter et pousser le workflow pour appliquer cette version. Une exécution
déjà lancée continue d'utiliser le YAML du commit qui l'a déclenchée ; on peut
l'annuler depuis l'onglet Actions de GitHub avant de pousser la simplification.

## Build local

Depuis la racine du dépôt, sous PowerShell :

```powershell
npm.cmd run build --prefix myBook2023 -- --outDir .local-build/ci
```

Cette commande préserve le build historique `dist/` suivi dans Git.
La CI utilise `npm run build` sans option et publie donc le nouveau `dist/`.
`public/_redirects` est copié dans le build pour permettre l'ouverture directe
des URL React sur Netlify. `netlify.toml` décrit la base et le dossier à publier.

## Comptes et coûts

Cette automatisation n'utilise aucun modèle d'IA ni MCP. Le jeton Netlify est
une clé d'authentification, pas un quota de tokens IA.

Les runners GitHub standard sont gratuits pour ce dépôt public. Les publications
Netlify restent soumises au forfait du compte : sur les forfaits à crédits,
une publication en production consomme actuellement 15 crédits. Les forfaits
Legacy ont des règles différentes.

Documentation officielle : [CLI Netlify](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/),
[arrêt des builds natifs](https://docs.netlify.com/build/configure-builds/stop-or-activate-builds/),
[facturation GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions),
[facturation Netlify](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/).
