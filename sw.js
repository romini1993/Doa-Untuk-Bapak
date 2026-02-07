const CACHE_NAME = 'doa-bapak-v1';
// Link icon dari Flaticon harus masuk sini juga
const assets = [
  './', 
  './index.html', 
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/128/15044/15044805.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Pake return biar proses install-nya bener-bener kelar
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
