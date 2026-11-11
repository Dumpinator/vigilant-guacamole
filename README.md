# Portfolio de Delphine Gaspar

Dépôt : [Dumpinator/vigilant-guacamole](https://github.com/Dumpinator/vigilant-guacamole).
Site : <https://delphine-gaspar.netlify.app/>.

Les sources de l'application se trouvent dans `myBook2023/` : React 18, Vite,
Sass et Framer Motion. Aucun backend ni base de données n'est nécessaire.

`myBook2023/src/` contient les composants et les pages, `myBook2023/public/`
les fichiers statiques et `myBook2023/dist/` le build historique.

## Lancement local sous Windows

Vérifié le 10 novembre 2026 avec Node.js 24.20.0 et npm 11.19.0.
Depuis la racine de ce dépôt :

```powershell
cd myBook2023
npm.cmd ci --legacy-peer-deps
npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Ouvrir <http://127.0.0.1:5173/>. Arrêter le serveur avec `Ctrl+C`.
`npm.cmd` évite le blocage de `npm.ps1` par la politique d'exécution PowerShell.
Le mode `--legacy-peer-deps` conserve les versions du lockfile malgré le conflit
existant entre Vite 5.1.0-beta.0 et @vitejs/plugin-react 4.0.4, qui déclare Vite 4
comme version compatible. Le démarrage et la compilation ont été vérifiés avec
ces versions, sans modifier `package.json` ni `package-lock.json`.

## Build

Le dossier `myBook2023/dist/` est suivi dans Git et contient le build historique.
Pour compiler sans l'écraser :

```powershell
npm.cmd run build -- --outDir .local-build
```

Le résultat se trouve dans `myBook2023/.local-build/`, ignoré par Git.
La commande habituelle `npm.cmd run build` écrit quant à elle dans `dist/`.

## Vérification de la version retrouvée

Le build historique **et le build reconstruit depuis les sources** produisent
le JavaScript `index-AJpMs4Wp.js` et le CSS `index-VgdnUxDW.css` présents sur
<https://delphine-gaspar.netlify.app/>. Leur contenu a été comparé et est
identique après normalisation des fins de ligne CRLF/LF.

Le commit cloné est `ffdbe67` du 12 février 2024. La navigation personnalisée
est dans `myBook2023/src/pages/Projects2/index.jsx` : fond animé verticalement,
aperçu horizontal, pagination circulaire entre Freepry reprise, Lichess et
Freepry back-office. Les fiches sont dans `src/pages/Project/` et le Lab
dans `src/pages/Lab/`.

## Points relevés pendant la remise en route

- Build de production réussi : environ 117 ko de JavaScript et 3,4 ko de CSS gzip.
- `npm.cmd run lint -- --ignore-pattern .local-build` échoue sur 21 erreurs et
  3 avertissements préexistants, principalement des imports inutilisés, les
  validations des props et des apostrophes JSX. Ils ne bloquent pas le build.
- Sur Netlify, les URL internes ouvertes directement (`/projets`, `/about`,
  `/projet/lichess`, etc.) renvoient une 404. La navigation React depuis
  l'accueil est un parcours distinct. Il faut prévoir le repli SPA dans la
  configuration du prochain déploiement.
- `src/App.jsx` importe `./pages/lab` alors que le dossier Git s'appelle `Lab`.
  Cela fonctionne sur Windows, mais la casse doit être corrigée avant un build
  sur un système sensible à la casse.
- Contrôle Chrome/Playwright aux largeurs 1440, 768, 390 et 320 px : aucune
  exception JavaScript observée. Les pages valides et le CV se chargent.
  Les flèches du carrousel parcourent les trois projets et bouclent correctement ;
  cliquer l'aperçu ouvre la bonne fiche. Le retour à la liste réinitialise
  toutefois la sélection au premier projet.
- Sur mobile, le carrousel conserve une composition de bureau : texte et aperçu
  se chevauchent et du contenu est coupé malgré l'absence de scroll horizontal
  à 390 px. Les fiches débordent de 214 à 234 px à cette largeur ; le Lab de
  844 px. Adapter leurs dimensions et leur disposition est prioritaire.
- Le menu mobile reste ouvert après sélection d'une page. Les commandes du
  carrousel sont des `div` cliquables sans accès clavier. Le glissement du fond
  ne change pas de projet : l'élément utilise `drag="x"`, mais calcule le geste
  avec `offset.y` et `velocity.y`.
- Un slug inconnu, par exemple `/projet/inexistant`, affiche une fiche vide avec
  trois images sans source au lieu d'une page 404.

Le contrôle est limité à Chrome en mode headless et aux parcours ci-dessus ;
Safari, Firefox et les téléphones physiques n'ont pas été testés.

La remise en route n'a modifié ni le code applicatif ni le build historique.
Les corrections fonctionnelles restent à traiter séparément.
