# Armurerie — Registre unique — déploiement GitHub Pages

## Fichiers de ce dossier (5)
- index.html      → l'application (page unique)
- manifest.json    → permet l'installation en appli iPhone/Android
- sw.js            → fonctionnement hors-ligne
- icon-192.png      → icône (petite taille)
- icon-512.png      → icône (grande taille)

Ces 5 fichiers doivent rester **au même niveau**, dans le même dossier (ne pas les mettre dans des sous-dossiers différents).

## Mise en ligne

1. Sur GitHub, crée un nouveau repository (ou utilise un repo existant), par ex. `armurerie-app`.
2. Ajoute les 5 fichiers ci-dessus à la racine de ce repo (glisser-déposer sur la page GitHub, ou `git add` / `git commit` / `git push` si tu utilises le terminal).
3. Va dans **Settings → Pages**.
4. Dans "Source", choisis la branche (`main` en général) et le dossier `/ (root)`.
5. Clique sur **Save**. GitHub te donne une adresse du type :
   `https://TON-NOM-UTILISATEUR.github.io/armurerie-app/`
6. Patiente 1 à 2 minutes le temps que la page se déploie, puis ouvre cette adresse.

## Installer sur iPhone

1. Ouvre l'adresse ci-dessus dans **Safari** sur l'iPhone.
2. Bouton Partager (carré avec flèche vers le haut) → **"Sur l'écran d'accueil"**.
3. L'appli s'installe comme une vraie appli, avec son icône, et fonctionne hors-ligne ensuite.

## Mettre à jour l'appli plus tard

Remplace simplement le(s) fichier(s) modifié(s) dans le repo GitHub (même procédure qu'à l'étape 2). Le service worker (`sw.js`) est réglé pour toujours utiliser la dernière version dès qu'il y a du réseau — pas besoin de manipulation particulière côté utilisateur, un simple rechargement de la page suffit.

## Important à savoir

Les données (stock matériel, registre des mouvements) sont stockées **uniquement dans le navigateur de l'appareil utilisé** (pas de serveur, pas de synchronisation entre appareils). Pense à utiliser le bouton "Exporter (.json)" du Tableau de bord régulièrement pour garder une sauvegarde.
