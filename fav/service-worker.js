const cacheName = 'portfolio-cache-v1';

const assets = [
  './',
  './css/style.css',
  './js/style.js',
  './images/kanu-removebg-preview.png',
  './images/copy-removebg-preview.png',
  './images/preview.jpg',
  './images/resume.png',
  './images/Screenshot 2025-04-27 204134.png',
  './images/android-chrome-192x192.png',
  './images/android-chrome-512x512.png',
  './fav/favicon.ico',
  './fav/manifest.json',
  './resume/KANIKA-THAKUR-FlowCV-Resume-20250430.pdf',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Activate event to clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
