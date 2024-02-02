-----------------------------------------------------------------------------------------------
مرحله اول: install node.js
-----------------------------------------------------------------------------------------------
npm -v

داخل دایرکتوری پروژه میشیم و دستور زیر را برای ساخت فایل جی سان میزنیم

npm init

Enter میزنیم تا save شه




-----------------------------------------------------------------------------------------------
مرحله دوم: create Server
-----------------------------------------------------------------------------------------------
 داخل دایرکتوری پروژه دستور زیر را در کامنت لاین میزنیم:

npm i http-server --save

پس از اجرای دستور بالا فایل 
pakage-lock.json 
را حذف میکنیم چون بهش نیازی نداریم


سپس وارد فایل pakage.json میشیم و در قسمت scripts جایی که نوشته "test" را تغییر میدیم و دستور زیر را مینویسیم

"start": "http-server -p 8000 -c-1"

سپس یک فولدر به نام public در دایرکتوری ایجاد میکنیم و همه فایل های پروژه به جز فایل جی سان را داخل آن میریزیم

و در نهایت دستور زیر را برای اجرای سرور میزنیم و یکی از آدرس ها رو روی مرورگر باز میکنیم

npm start




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




-----------------------------------------------------------------------------------------------
lessan 10: Service Worker
-----------------------------------------------------------------------------------------------
1.  ایجاد app.js در آدرس public/static/js

2. معرفی فایل app.js در انتهای کدهای index.html
<script src="/static/js/app.js"></script>

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
    console.log('service Worker is worked');

2. سپس کد تست را پاک میکنیم و کدهای زیر را مینویسیم

```js
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
برای اینکه بنر اپلیکیشن را داشته باشیم که طرف بتواند روی آن کلیک کند تا برنامه ما روی دیوایس او نصب بشه با ید شرایط زیر را داشته باشه:

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

2. برای نسخه های بعد از 2018 باید کدهای زیر را در ادامه بنویسیم
توضیح: ما میخواهیم روی دکمه + که کلیک کردیم بنر نصب اپلیکیشن به نمایش در بیاد برای همین ابتدا آن را با کوری سلکتور دریافت میکنیم

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
