const CACHE_NAME = 'csyos-v1';
const urlsToCache = [
  '/really/',
  '/really/index.html',
  '/really/assets/index-YamY73pN.js',
  '/really/assets/rolldown-runtime-CMxvf4Kt.js',
  '/really/assets/vendor-pdf-D2vT3ju6.js',
  '/really/assets/dist-BcvA-GRa.js',
  '/really/assets/definitions-BdWVgBTV.js',
  '/really/assets/haptics-DpcZkU6l.js',
  '/really/assets/jsx-runtime-DDrWIXeu.js',
  '/really/assets/react-ICqv4BO6.js',
  '/really/assets/types-BzM9yekO.js',
  '/really/assets/storage-CO_P6eOB.js',
  '/really/assets/apiRequestLedger-nkZkkXOY.js',
  '/really/assets/backendConfig-zNmUg0b0.js',
  '/really/assets/characterStore-DrshSiXL.js',
  '/really/assets/runtimeConfig-LnDFd7sY.js',
  '/really/assets/vectorMemorySyncState-9VIEqyfY.js',
  '/really/assets/backendClient-50_bwcBm.js',
  '/really/assets/jszip.min-Uer3KtZc.js',
  '/really/assets/db-CNLxxBIm.js',
  '/really/assets/index-Df4yHm2o.css',
  '/really/icons/icon-96.webp',
  '/really/icons/icon-192.webp',
  '/really/icons/icon-256.webp',
  '/really/images/taoyuan-splash-bg-v3.webp',
  '/really/fonts/taoyuan-splash-poem.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          networkResponse => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          }
        );
      })
  );
});
