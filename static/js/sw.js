const CACHE_NAME = 'countdown-rome-v1';
const urlsToCache = [
    '/mobile',
    '/static/css/mobile.css',
    '/static/js/mobile.js',
    '/api/countdown'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});
