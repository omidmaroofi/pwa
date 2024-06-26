-----------------------------------------------------------------------------------------------
مرحله اول: install node.js
-----------------------------------------------------------------------------------------------
```console
npm -v
```

داخل دایرکتوری پروژه میشیم و دستور زیر را در کامندلاین برای ساخت فایل جی سان مینویسیم

```console
npm init
```

Enter میزنیم تا save شه




-----------------------------------------------------------------------------------------------
مرحله دوم: create Server
-----------------------------------------------------------------------------------------------
 داخل دایرکتوری پروژه دستور زیر را در کامندلاین مینویسیم:

```console
npm i http-server --save
```

پس از اجرای دستور بالا فایل 
pakage-lock.json 
را حذف میکنیم چون بهش نیازی نداریم


سپس وارد فایل pakage.json میشیم و در قسمت scripts جایی که نوشته "test" را تغییر میدیم و دستور زیر را مینویسیم

```json
"start": "http-server -p 8000 -c-1"
```
سپس یک فولدر به نام public در دایرکتوری ایجاد میکنیم و همه فایل های پروژه به جز فایل جی سان را داخل آن میریزیم

و در نهایت دستور زیر را برای اجرای سرور میزنیم و یکی از آدرس ها رو روی مرورگر باز میکنیم

```console
npm start
```




-----------------------------------------------------------------------------------------------
مرحله سوم: ایجاد تگ متادیتا در فایل index.html
-----------------------------------------------------------------------------------------------
تگ زیر رو حتما باید به پروژه اضافه کنیم تا در وب اپلیکیشن به خطا نخوریم:

 ```html
 <meta name="viewport" content="width=device-width, initial-scale=1">
 ```




-----------------------------------------------------------------------------------------------
lessan 6: manifest.json
-----------------------------------------------------------------------------------------------
```json
{
 "name" : "ایونت هر رویداد، یک تجربه جدید",
 "short_name" : "ایونت",
 "start_url" : "/?source=pwa",
 "scope" : ".",
 "display" : "standalone",
 "dir" : "rtl",
 "lang" : "fa"
}
```



-----------------------------------------------------------------------------------------------
lessan 7: icons and theme_color on manifest.json
-----------------------------------------------------------------------------------------------
```json
{
    "name": "ایونت هر رویداد, یک تجربه جدید",
    "short_name": "ایونت",
    "start_url": "/?source=pwa",
    "scope": ".",
    "display": "standalone",
    "dir": "rtl",
    "lang": "fa",
    "background_color": "#64b5f6",
    "theme_color": "#1e88e5",
    "icons": [
        {
            "src": "/static/icons/homescreen48.png",
            "sizes": "48x48",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen168.png",
            "sizes": "168x168",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/static/icons/homescreen512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```




-----------------------------------------------------------------------------------------------
lessan 8: index.html =====> support safari
-----------------------------------------------------------------------------------------------
  ```htm
  <!--! supprt for Safari Browser -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <!--! stile bar -->
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <!--! apple touch title -->
  <meta name="apple-mobile-web-app-title" content="Event PWA">
  <!--! apple touch startup image -->
  <link rel="apple-touch-startup-image" href="./static/icons/homescreen512.png">
  <!--! support apple touch icons -->
  <link rel="apple-touch-icon" href="./static/icons/homescreen48.png" sizes="48x48">
  <link rel="apple-touch-icon" href="./static/icons/homescreen72.png" sizes="72x72">
  <link rel="apple-touch-icon" href="./static/icons/homescreen96.png" sizes="96x96">
  <link rel="apple-touch-icon" href="./static/icons/homescreen144.png" sizes="144x144">
  <link rel="apple-touch-icon" href="./static/icons/homescreen168.png" sizes="168x168">
  <link rel="apple-touch-icon" href="./static/icons/homescreen192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="./static/icons/homescreen256.png" sizes="256x256">
  <link rel="apple-touch-icon" href="./static/icons/homescreen512.png" sizes="512x512">
  ```




-----------------------------------------------------------------------------------------------
lessan 10: Service Worker
-----------------------------------------------------------------------------------------------
1.  ایجاد app.js در آدرس public/static/js

2. معرفی فایل app.js در انتهای کدهای index.html

3. ایجاد فایل serviceWorker به نام sw.js یا service-worker.js در روت پروژه کنار فایل index.html

4. نوشتن کدهای زیر در فایل app.js

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service worker registration succeeded:", registration);
    })
    .catch((err) => {
      console.log("Service worker registration failed:", err);
    });
} else {
  console.log("Service workers are not supported.");
}
```




-----------------------------------------------------------------------------------------------
lessaon 11: Service Worker
-----------------------------------------------------------------------------------------------
1. ابتدا سرویس ورکر را با یک دستور کنسول چک میکنیم که آیا کار میکنه یا خیر
```javascript
console.log('service Worker is worked');
```

2. سپس کد تست را پاک میکنیم و کدهای زیر را مینویسیم

```javascript
self.addEventListener('install' , (event) => {
    console.log('installing service worker' , event);
})

self.addEventListener('activate' , (event) => {
    console.log('activating service worker' , event);
    console.log('v1')
});

self.addEventListener('fetch' , (event) => {
    console.log('fetch data' , event);
});
```



-----------------------------------------------------------------------------------------------
lessaon 12: install banner ===> on app.js
-----------------------------------------------------------------------------------------------
برای اینکه بنر اپلیکیشن را داشته باشیم که طرف بتواند روی آن کلیک کند تا برنامه ما روی دیوایس او نصب بشه باید شرایط زیر را داشته باشه:

:داشتن موارد زیر ضروری است
1. short_name or name

2. icons =======> must include a 192px  and  512px sizes icons

3. start_url

4. display ======> must be one of: fullscreen, standalone, or minimal-ui

5. HTTPS

6. service workers


پس از داشتن شرایط لازم وارد app.js میشیم و کدهای زیر را مینویسیم

1. برای مرورگرهای قبل نسخه 2018 که به صورت خودکار بنر را نمایش میدادند باید کدهای زیر را ابتدا وارد کنیم

```js
let installPromptEvent;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  console.log("before install prompt event");
  installPromptEvent = e;
});
```
2. برای نسخه های بعد از 2018 باید کدهای زیر را در ادامه بنویسیم
توضیح: ما میخواهیم روی دکمه + که کلیک کردیم بنر نصب اپلیکیشن به نمایش در بیاد برای همین ابتدا آن را با کوری سلکتور دریافت میکنیم

```js
document.querySelector(".fixed-action-btn a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(installPromptEvent);
  if (installPromptEvent) {
    installPromptEvent.prompt();

    installPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User Accepted");
      } else {
        console.log("User dismissed");
      }

      installPromptEvent = null;
    });
  }
});
```



-----------------------------------------------------------------------------------------------
lessaon 13: ofline service(cache api)----- on service-worker.js
-----------------------------------------------------------------------------------------------
1. از سرویس cache در زمانی استفاده میشه که ما میخواهیم در حالت آفلاین وب سایتمان به نمایش در بیاید
2. اطلاعات در داخل cache storage مرورگر ذخیره میشن
3. کش ها به صورت key و value ذخیره می شوند.
4. برای شروع ابتدا باید فایل service-worker.js را باز کرد و کدهای زیر را نوشت:

```javascript
self.addEventListener("install", (event) => {
  console.log("installing service worker", event);
  event.waitUntil(
    caches.open("front-cache")
    .then((cache) => {
      cache.add("/static/css/materialize.min.css");
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating service worker", event);
  console.log("v1");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("front-cache").then((cache) => {
      return cache.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      });
    })
  );
});
```




-----------------------------------------------------------------------------------------------
lessan 14: Caching multiple files && Optimizing Cache=====> on service-worker.js
-----------------------------------------------------------------------------------------------
ابتدا چندین فایل دیگر را که میخواهیم کش کنیم به سرویس ورکر اضافه میکنیم
پس ابتدا وارد service-worker.js میشیم و کدهای زیر را تغییر میدهیم:

```javascript
self.addEventListener("install",(event)=>{
  console.log("installing service worker",event)
  event.waitUntil(
    cache.open('front-cache').then((cache)=>{
      cache.addAll([
        '/',
        '/static/css/materialize.min.css',
        '/static/js/app.js',
        '/static/js/materialize.min.js',
        '/static/css/vazir.css',
        '/static/css/style.css'
      ])
    })
  )
})
```
وقتی ما چندین فایل را اضافه میکنیم به مشکلی برمیخوریم که دفعه بعد اگر ویرایشی در سایت ایجاد کنیم نمایش نمیده برای حل این مشکل دو متغیر زیر را اضافه میکنیم

```javascript
let CACHE_VERSION = 1.1;
let CURRENT_CACHE = {
  static: "static-cache-v" + CACHE_VERSION,
};

self.addEventListener("install", (event) => {
  console.log("installing service worker", event);
  event.waitUntil(
    caches.open(CURRENT_CACHE['static']).then((cache) => {
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
  console.log("v1");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CURRENT_CACHE['static']).then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request);
      });
    })
  );
});
```
اما هنوز مشکل وجود دار و ورژن های قبلی حذف نشده برای حل این مشکل قسمت activate را ویرایش میکنیم:
```javascript
let CACHE_VERSION = 1.4;

let CURRENT_CACHE = {
    static : 'static-cache-v' + CACHE_VERSION
}

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

self.addEventListener('fetch' , (event) => {
    event.respondWith(
        caches.open(CURRENT_CACHE['static']).then((cache) => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        })
    )
});
```




-----------------------------------------------------------------------------------------------
lessan 15: dynamic cache===> on service-worker.js
-----------------------------------------------------------------------------------------------
برای داینامیک کردن کش دو روش وجود دارد که به ترتیب هرکدام از آنها را خواهیم دید:

```javascript
let CACHE_VERSION = 1.02;
let CURRENT_CACHE = 'dynamic-cache-v' + CACHE_VERSION;

self.addEventListener('install' , (event) => {
    console.log('installing service worker' , event);
    event.waitUntil(
        caches.open(CURRENT_CACHE)
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
```

1. روش اول:
```javascript
self.addEventListener('fetch' , (event) => {
    event.respondWith(
        caches.open(CURRENT_CACHE).then((cache) => {
            return cache.match(event.request).then(response => {
                if(response) {
                    console.log('Found response in cache:' , response);

                    return response;
                }  

                console.log('Fetching request from the network');

                return fetch(event.request).then(networkResponse => {
                    cache.put(event.request , networkResponse.clone());

                    return networkResponse;
                }).catch(err => {
                    console.log('error in fetch handler:' , err);
                    throw err;
                })
            })
        })
    )
});
```
2. روش دوم:
```javascript
self.addEventListener('fetch' , (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if(response) return response;

            return fetch(event.request).then(networkResponse => {
                caches.open(CURRENT_CACHE)
                    .then(cache => {
                        cache.put(event.request , networkResponse.clone());
                        return networkResponse;
                    })
            })
        })
    )
});
```




-----------------------------------------------------------------------------------------------
lessan 16: راه های fetch کردن اطلاعات===> on service-worker.js
-----------------------------------------------------------------------------------------------
ما از 4 روش میتوانیم اطلاعات رو fetch کنیم (یا برگردونیم):

1. زمانی که بر اساس network بخواهیم اطلاعات رو برگردونیم
```javascript
self.addEventListener('fetch', (event)=>{
  event.respondWith(
    fetch(event.request)
  )
});
```

2. فقط از طریق cache اطلاعات رو برگردونیم:
در این روش حتما باید یک کش از قبل وجود داشته باشد
```javascript
self.addEventListener('fetch', (event)=>{
  event.match(event.request)
});
```

3. ابتدا اطلاعات رو از کش بخون اگه به هردلیلی اطلاعات وجود نداشت اطلاعات رو از network برگردون:
    دو روشی که در جلسه قبلی گفته شد هر دو از این استراتژی استفاده میکنند

4. ابتدا اطلاعات رو از network بخون اما اگر به هر دلیلی اطلاعات وجود نداشت، اطلاعات رو از cache برگردون.
```javascript
self.addEventListener('fetch', (event)=>{
  return event.respondWith(
    fetch(event.request)
    .then(response =>{
      return cache.open(CURRENT_CACHE)
      .then(cache => {
        cache.put(event.request, response.clone());
        return response;
      })
    })
  )
});
```
مزایا و معایب روش سوم و چهارم:
در استراتژی سوم که ابتدا اطلاعات از کش خونده میشه سرعت بسیار بالاتر از استراتژی چهارم است
ولی در استراتژی چهارم ما میتونیم تغییرات رو خیلی سریع و بدون هیچ مشکلی بخونیم

در مثال زیر یک فایل product.json ساختیم  اطلاعات و یک سری اطلاعات داخلش ریختیم
حال میخواهیم این اطلاعات را بخوانیم
پس ابتدا فایل service-worker را تغییر میدهیم
```javascript
self.addEventListener("fetch", (event) => {
  let urls = ["/products.js"];
  if (urls.indexOf(event.request.url) > -1) {
    console.log("network first omid");
    fetch(event.request)
      .then((response) => {
        return caches.open(CURRENT_CACHE["dynamic"]).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch((err) => {
        return caches.match(event.request);
      });
  } else {
    console.log("cache first omid");
    return event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) return response;

        return fetch(event.request).then((newworkResponse) => {
          caches.open(CURRENT_CACHE["dynamic"]).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
```

حال به سراغ فایل app.js میزیم واطلاعات خواندن آن را مینویسیم
```javascript
fetch("../../products")
  .then((response) => response.json())
  .then((data) => console.log(data));
```
