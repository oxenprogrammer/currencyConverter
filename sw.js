//install service workker
const urls = [
    './',
    './index.html',
    './img/favicon.jpg',
    './css/materialize.min.css',
    './js/idb.js',
    './js/app.js',
    './js/ui.js',
    './js/currencyConverterAPI.js',
    './js/materialize.min.js',
    'https://free.currencyconverterapi.com/api/v5/currencies'
]
self.addEventListener('install', (event) => {
    //console.log('service worker installed', event);

    if (!('caches' in self)) return
    event.waitUntil(
        caches.open('v5')
        .then(
            (cache) => {
                urls.forEach(url => {
                    cache.add(url).catch(
                        error => {
                            console.log(`This is the ${error}`)
                        }
                    )
                })
            }
        )
    )
});

//activate service worker
self.addEventListener('activate', (event) => {
    //console.log('service worker activated', event)
    const CURRENT_CACHE = 'v5'
    event.waitUntil(
        caches.keys()
        .then((cacheKeys) => {
            return Promise.all(
                cacheKeys.map((cacheKey) => {
                    if (cacheKey !== CURRENT_CACHE) {
                        console.log(`Deleting cache: ${cacheKey}`)
                        return caches.delete(cacheKey)
                    }
                })
            )
        })
    )

});

/** A service worker! */
self.addEventListener('fetch', event => {
    const version = 'v5'
    event.respondWith(
        // Try the network
        fetch(event.request)
        .then(function (res) {
            return caches.open(version)
                .then(function (cache) {
                    // Put in cache if succeeds
                    cache.put(event.request.url, res.clone());
                    return res;
                })
        })
        .catch(function (err) {
            // Fallback to cache
            return caches.match(event.request);
        })
    );
})