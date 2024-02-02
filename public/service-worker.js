let CACHE_VERSION = 1.01;

let CURRENT_CACHE = {
    static : 'static-cache-v' + CACHE_VERSION,
    dynamic : 'dynamic-cache-v' + CACHE_VERSION
};

self.addEventListener('install' , (event) => {
    console.log('installing service worker' , event);
    event.waitUntil(
        caches.open(CURRENT_CACHE['static'])
            .then((cache) => {
                cache.addAll([
                    '/',
                    '/static/css/materialize.min.css',
                    '/static/js/app.js',
                    '/static/js/materialize.min.js',
                    '/static/css/vazir.css',
                    '/static/css/style.css'
                ]);
            })
    )
})

self.addEventListener('activate' , (event) => {
    console.log('activating service worker' , event);
    let expectedCacheNames = Object.values(CURRENT_CACHE);

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.forEach(cacheName => {
                    if(! expectedCacheNames.includes(cacheName)) {
                        console.log('Deleting out of date cache:' , cacheName);

                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )

});
//!-- روش اول
// self.addEventListener('fetch' , (event) => {
//     event.respondWith(
//         caches.open(CURRENT_CACHE['static']).then((cache) => {
//             return cache.match(event.request).then(response => {
//                 if(response) {
//                     console.log('Found response in cache:' , response);

//                     return response;
//                 }  

//                 console.log('Fetching request from the network');

//                 return fetch(event.request).then(networkResponse => {
//                     cache.put(event.request , networkResponse.clone());

//                     return networkResponse;
//                 }).catch(err => {
//                     console.log('error in fetch handler:' , err);
//                     throw err;
//                 })
//             })
//         })
//     )
// });

//! روش دوم
self.addEventListener('fetch' , (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if(response) return response;

            return fetch(event.request).then(networkResponse => {
                caches.open(CURRENT_CACHE['dynamic'])
                    .then(cache => {
                        cache.put(event.request , networkResponse.clone());
                        return networkResponse;
                    })
            })
        })
    )
});
