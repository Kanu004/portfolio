const cacheName = 'portfolio-cache-v1'; 

const assets = [
  './',
  './style.css',
  './style.js',
  './kanu-removebg-preview.png',
  './copy-removebg-preview.png',
  './preview.jpg',
  './resume.png',
  './Screenshot 2025-04-27 204134.png',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png',
  './favicon.ico',
  './KANIKA-THAKUR-FlowCV-Resume-20250430.pdf',
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

caches.open(cacheName).then(cache => {
  return cache.addAll(assets); // Includes HTML, CSS, JS, etc.
});

