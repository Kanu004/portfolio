const cacheName = 'portfolio-cache-v1';
const assets = [
  './portfolio.html',
  './style.css',
  './style.js',
  './IMG20241126210433-removebg-preview.png',
  './copy-removebg-preview.png',
  './preview.jpg',
  './Screenshot 2025-04-27 204134.png',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
