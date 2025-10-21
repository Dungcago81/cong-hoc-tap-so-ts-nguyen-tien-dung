self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hoc-tap-so-v1').then(cache => cache.addAll(['./','./index.html','./logo512.png','./manifest.json']))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});