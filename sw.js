// Service worker minimal : requis pour l'installation, aucun cache (l'application reste toujours à jour).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
