'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9f3448c9ae1b9602debefb9a9ae5962c",
"index.html": "e65f4149c149213a416c1d756a628050",
"/": "e65f4149c149213a416c1d756a628050",
"main.dart.js": "eb297b0fdfcfbf9a51722544944ee54c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "189865e3291d25b232feb6d5f2243783",
"icons/Icon-192.png": "35b04dc22e9fd3e59b9c1de27bb1c762",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "1dcac969bb81ad2dd072d188237b386c",
"manifest.json": "ebea5550bb5876a609c4a9f2946976fd",
"assets/dotenv": "e8287e42ac299e7c5efcc924f11dd37f",
"assets/AssetManifest.json": "5b34cc948d6de6f2a324d0d0c7e1d7d8",
"assets/NOTICES": "bf972f049837234f7802f32c746c9d4d",
"assets/FontManifest.json": "3008353f60e59b3f5e85904db9231906",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5b845d39ae845c64bb8930ac255f5f91",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "06bd76b8974bd64352bfd91b7cd5e87a",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/fonts/Inter-Regular.ttf": "a4a7379505cd554ea9523594b7c28b2a",
"assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/fonts/MaterialIcons-Regular.otf": "83bc1c36fdd4501ddf9b58772285ffc9",
"assets/assets/welcome/web_bg.png": "9eea098639ef7767cef90a41dce6adae",
"assets/assets/welcome/app_logo_name.png": "c6f7fc57f033db596cf8fd30b85dabca",
"assets/assets/welcome/metal_trade_logo.png": "94bf23904307563e98a2689ff3887a38",
"assets/assets/welcome/google-play-badge.png": "591c87ed3a6303950c9eb7d9664ac5c4",
"assets/assets/welcome/web_header.png": "1d953bc54984ef9aff2616cf6212dfd7",
"assets/assets/welcome/app_screens.png": "d32e9293fb7523d168fea5e74b66b2b2",
"assets/assets/welcome/appstore-badge.png": "106e4b96a1cac12cbdd7b1601be77163",
"assets/assets/welcome/zig_zag_layer.png": "17f4a7cfc374ed26280f3a0acd04d88e",
"assets/assets/welcome/web_img2.png": "681b60cf390474b81c2c1f97c42c32fb",
"assets/assets/welcome/welcom_page.png": "eb99947a95a1d1ed806189896b0cc633",
"assets/assets/dashboard/RFQs.svg": "5b8dd1462dbe97526425782ed5011063",
"assets/assets/dashboard/Home.svg": "39cea62c5e6a4d8b41b692dc4cabc914",
"assets/assets/dashboard/Profile_active.svg": "9c8dd0499d0d674d1ccada179ed7d430",
"assets/assets/dashboard/market_news__active.svg": "3f65e09201163808be5ff4202b3c6bdb",
"assets/assets/dashboard/Chat_active.svg": "c6534edd2edce9fb6f5a23d8176d6674",
"assets/assets/dashboard/Home__active.svg": "97f9757e10053e9dd9038bff8f0ea245",
"assets/assets/dashboard/Chat.svg": "7f1251c8740c8cc49d8187df1f750326",
"assets/assets/dashboard/market_news.svg": "77989894228205b441e6bf5822e6655d",
"assets/assets/dashboard/Profile.svg": "af06fd486b58938fc03be92056621361",
"assets/assets/dashboard/RFQs__active.svg": "0bdc125844aaf8b91a7208c03a1bd318",
"assets/assets/translations/zh-CN.json": "5b74b33f9690f80342f424490eebdb5d",
"assets/assets/translations/en-US.json": "82cba079e16efd3dffcbffb9d03fa46a",
"assets/assets/translations/hi-IN.json": "57e9cd3124cd7211f05f2eff38c43a8e",
"assets/assets/country.json": "4dda5129ed96fcdd13edb8505894ca69",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
