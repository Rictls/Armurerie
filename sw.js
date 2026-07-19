const CACHE = 'armurerie-v2';
const FICHIERS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

/* Stratégie "réseau d'abord" : la dernière version en ligne est toujours
   utilisée quand la connexion est disponible ; le cache ne sert que de
   secours hors-ligne. Ça évite qu'une ancienne version reste bloquée en
   cache après une mise à jour. */
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(res => {
      const copie = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copie));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
