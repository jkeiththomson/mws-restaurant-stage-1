var cacheName = 'mws-cache-v1';

console.log('This is the service worker script');

// set up cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.log('about to add keys to cache');
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/serviceworker.js'
      ]);
    })
  );
});

// get fetch requests from the cache if possible
//
// listen for a fetch event
self.addEventListener('fetch', function(event) {

  // see if requested file is already in the cache
  event.respondWith(caches.match(event.request).then(function(response) {

    // if requested file is in the cache, just return it
    if (response) {
      return response;
    }

    // if requested file is not in the cache, fetch it from server
    else {
      return fetch(event.request).then(function(response) {

        // response may only be used once, so make a clone that we can return
        let clone = response.clone();

        // put original file into the cache
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, response);
        });

        // and return the clone
        return clone;

      }).catch(function () {
        console.log('failed to fetch requested file');
      });
    }
  }));
});
