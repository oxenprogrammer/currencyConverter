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
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request)
            .then((response) => {
                console.log('fetched from network this time!')
                return caches.open('v1')
                .then((cache) => {
                    cache.put(event.request, response.clone())
                    return response
                })
            })
        })
    )
  })
