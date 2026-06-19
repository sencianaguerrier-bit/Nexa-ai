self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Laisse filer les requêtes réseau vers l'IA
});
