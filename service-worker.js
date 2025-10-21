self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => cache.addAll(['./', './index.html', './logo512.png']))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});