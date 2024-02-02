let CACHE_VERSION = 1.1;
let CURRENT_CACHE = {
  static: "static-cache-v" + CACHE_VERSION,
};

self.addEventListener("install", (event) => {
  console.log("installing service worker", event);
  event.waitUntil(
    caches.open(CURRENT_CACHE["static"]).then((cache) => {
      cache.addAll([
        "/",
        "/static/css/materialize.min.css",
        "/static/js/app.js",
        "/static/js/materialize.min.js",
        "/static/css/vazir.css",
        "/static/css/style.css",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating service worker", event);
  let expectedCacheName = Object.values(CURRENT_CACHE);
  console.log(expectedCacheName);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CURRENT_CACHE["static"]).then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request);
      });
    })
  );
});
