# CI et déploiement Netlify

Configuration préparée le 11 novembre 2026 pour `Dumpinator/vigilant-guacamole`,
branche de production `main`, site existant `https://delphine-gaspar.netlify.app/`.
Le projet utilise Vite : son dossier de publication est **`myBook2023/dist/`**.

## Comparaison des possibilités

| Méthode | Compilation et publication | Intérêt et limites |
| --- | --- | --- |
| [Connexion Git native de Netlify](https://docs.netlify.com/deploy/create-deploys/) | Netlify reconstruit au push et publie | Le plus simple à administrer. Une CI GitHub lancée en parallèle ne constitue pas à elle seule un verrou : exécuter les contrôles dans la chaîne Netlify, ou imposer les PR validées avant fusion sur la branche de production. |
| [GitHub Actions + Netlify CLI](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/) | GitHub teste le build puis transmet ces mêmes fichiers | **Solution retenue.** Contrôle explicite avant publication, pas de seconde compilation. Nécessite l'identifiant du projet et un jeton Netlify dans GitHub. |
| [GitHub Actions + build hook](https://docs.netlify.com/build/configure-builds/build-hooks/) | Après la CI, un POST déclenche un build Netlify | Simple, mais Netlify recompile et le hook cible une branche, pas l'artefact exact déjà testé. Les builds Netlify doivent rester actifs. |
| [API REST Netlify](https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/) | Upload ZIP ou fichiers et empreintes, puis attente de l'état de déploiement | Possible sans CLI ; demande davantage de code pour gérer l'envoi et le suivi. |
| [Dépôt manuel du dossier](https://docs.netlify.com/deploy/create-deploys/#drag-and-drop) | Compilation locale puis glisser-déposer sur le projet existant | Reste une solution de secours, sans CI automatique. |

Aucune de ces méthodes ne nécessite un agent IA ni un MCP.
`NETLIFY_AUTH_TOKEN` est un identifiant technique d'authentification : il ne
correspond pas à des tokens de modèle d'IA facturés à l'utilisation.

## Comportement du workflow retenu

Fichier : [`.github/workflows/portfolio.yml`](../.github/workflows/portfolio.yml).

1. Chaque push, chaque pull request et le lancement manuel déclenchent les contrôles.
2. Installation du portfolio à partir de son lockfile, avec `--legacy-peer-deps`
   pour le conflit existant Vite/plugin React.
3. Installation des outils CI verrouillés séparément dans `.github/ci/`.
4. `npm run build` dans `myBook2023/` crée un nouveau `dist/` depuis les sources.
   Le workflow ne publie donc pas le vieux `dist/` suivi dans Git.
5. Huit tests Playwright s'exécutent contre ce build servi par Vite Preview.
6. Le build validé est téléchargeable dans les artefacts GitHub, conservés 3 jours.
7. Un push sur `main`, ou un lancement manuel sur `main`, publie ce même dossier
   avec `netlify deploy --no-build --prod`. Les autres branches et les PR
   ne publient rien. Toute erreur de compilation ou de test empêche cette étape.

Le workflow évite d'interrompre un déploiement en cours. Plusieurs pushes
rapprochés peuvent remplacer les exécutions encore en attente, tout en gardant
la dernière version à traiter. Ne pas activer en parallèle une publication Git
native de Netlify : elle publierait indépendamment des contrôles GitHub.

Les actions officielles sont fixées à des SHA et les versions de Playwright et
de Netlify CLI sont fixées dans un lockfile. Les secrets ne sont fournis qu'à
l'étape de publication de `main`, jamais aux tests des PR.

### Contrôles couverts

- Rendu React et absence d'exception JavaScript sur l'accueil, À propos, Lab,
  et les trois fiches projet ; chargement des images HTML de ces pages.
- Pagination circulaire du carrousel et ouverture de la bonne fiche.
- Présence d'un vrai CV PDF et de la règle de repli SPA dans l'artefact publié.

Les tests neutralisent les requêtes aux CDN de polices et de styles externes
pour ne pas dépendre de leur disponibilité. Ils ne constituent pas un audit
visuel complet ni une validation de Safari, du responsive ou de tous les gestes.
Le lint historique n'est pas une étape bloquante de cette CI : il reste des
erreurs préexistantes à corriger, documentées dans le README.

## Activation dans les comptes GitHub et Netlify

La configuration locale est prête ; elle ne crée pas de secret dans ton compte
et ne déclenche pas de publication depuis cette session.

1. Dans le **projet Netlify existant** `delphine-gaspar`, ouvrir **Project
   configuration > General > Project details > Project information** et copier
   le **Project ID**. Il correspond à `NETLIFY_SITE_ID` dans l'API et la CLI.
2. Dans [les paramètres Actions du dépôt](https://github.com/Dumpinator/vigilant-guacamole/settings/secrets/actions),
   onglet **Secrets**, ajouter un secret de dépôt `NETLIFY_SITE_ID` avec
   cet identifiant. Ne pas créer un nouveau projet Netlify.
3. Dans [Netlify > Applications > Personal access tokens](https://app.netlify.com/user/applications#personal-access-tokens),
   générer un jeton dédié et lui donner une date d'expiration adaptée.
4. Dans [GitHub > Secrets and variables > Actions](https://github.com/Dumpinator/vigilant-guacamole/settings/secrets/actions),
   onglet **Secrets**, ajouter un secret de dépôt **`NETLIFY_AUTH_TOKEN`**.
   Le garder dans GitHub, sans le mettre dans les fichiers du projet ni le chat.
5. Si Netlify est déjà connecté au dépôt Git, arrêter ses builds automatiques :
   **Project configuration > Developer settings > Continuous deployment >
   Build settings > Configure > Build status > Stopped builds**. Les uploads
   manuels par CLI restent possibles. Si le site est uniquement publié par
   glisser-déposer, cette connexion Git n'est pas nécessaire.
6. Commiter puis pousser les fichiers de cette configuration sur GitHub. Dans
   **Actions > Portfolio CI and Netlify**, vérifier les étapes puis le résultat
   du déploiement. Si une des deux valeurs manque, l'étape de publication échoue
   avec un message explicite ; la compilation et les tests restent vérifiables.

Les instructions officielles : [authentification CLI et jetons](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/),
[identifiant du projet](https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/),
[secrets GitHub](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets),
[arrêt des builds Netlify](https://docs.netlify.com/build/configure-builds/stop-or-activate-builds/).

`netlify.toml` décrit aussi les chemins nécessaires si tu choisis plus tard
l'intégration Git native : base `myBook2023`, commande `npm run build`, publication
`dist`. Pour le workflow retenu, `--dir` fournit le chemin absolu de l'artefact
et `--no-build` évite toute recompilation par la CLI.

## Coûts

- Aucune étape n'appelle un modèle d'IA : pas de consommation de tokens IA.
- Le dépôt est public. Les runners GitHub standard sont gratuits pour les dépôts
  publics ; le stockage des artefacts a ses propres quotas. Leur rétention est
  limitée à 3 jours ici. [Facturation GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).
- Sur les forfaits Netlify à crédits, une publication en production coûte
  actuellement **15 crédits**, même si la compilation a été faite sur GitHub.
  Les minutes de build ne sont pas un compteur distinct de ces nouveaux forfaits.
  [FAQ Netlify](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/).
- Les comptes créés avant le 4 septembre 2025 peuvent être sur un forfait Legacy,
  dont les règles diffèrent. Vérifier le forfait réel dans Netlify avant de
  chiffrer les coûts. Ne pas changer de forfait pour configurer cette CI : un
  passage du Legacy aux crédits est irréversible.
  [Forfaits Netlify](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/).

Si chaque petite modification est poussée directement sur `main`, chaque
publication réussie peut consommer ces crédits. Pour itérer, travailler sur une
branche puis fusionner une série de changements quand elle est prête. Le contrôle
de cette branche fonctionne sans la publier en production.

## Vérification locale sans écraser le build historique

Depuis la racine du dépôt, dans PowerShell :

```powershell
npm.cmd ci --prefix myBook2023 --legacy-peer-deps
npm.cmd ci --prefix .github/ci
npm.cmd run build --prefix myBook2023 -- --outDir .local-build/ci
Push-Location .github/ci
npm.cmd exec -- playwright install chromium
$env:CI_BUILD_DIR = '.local-build/ci'
npm.cmd test
Remove-Item Env:CI_BUILD_DIR
Pop-Location
```

La CI Linux utilise le dossier `dist/` normal, puis téléverse exactement ce
qu'elle a testé. Le build historique suivi dans Git reste inchangé localement.

## Retour à une version précédente

Dans Netlify, ouvrir **Deploys**, choisir un ancien déploiement fonctionnel et
le republier. Corriger ensuite le code sur `main` pour que la prochaine CI
publie la version attendue. Cette opération ne nécessite pas de reconstruire
manuellement les fichiers ni de faire appel à une IA.
