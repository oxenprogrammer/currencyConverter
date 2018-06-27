//install service workker
self.addEventListener('install', (event) => {
//console.log('service worker installed', event);
if(!('caches' in self)) return
event.waitUntil(
    caches.open('v1')
    .then(
        (cache) => {
            return cache.addAll(
                [
                    './../index.html',
                    './../img/currency-icon.png',
                    './../css/materialize.min.css',
                    './ui.js',
                    './currencyConverterAPI.js',
                    './materialize.min.js'

                ]
            )
        }
    )
)
});

//activate service worker
self.addEventListener('activate', (event) => {
console.log('service worker activated', event);
});

/** A service worker! */
self.addEventListener('fetch', event => {
    const version = 'v1'
    event.respondWith(
        caches.open(version)
        .then((cache) => {
            return cache.match(event.request)
            .then((response) => {
                let fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone())
                    return networkResponse
                })
                event.waitUntil(fetchPromise)
                return response
            })
        })
       
    )
  })
