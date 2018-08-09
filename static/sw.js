// https://developers.google.com/web/fundamentals/primers/service-workers/

var CACHE_NAME = 'dev-letters-v1';

var urlsToCache = [
	'/',
	'/css/capsule.min.css',
	'/js/script.js'
];

self.addEventListener('install', function (event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
	);
});


// my function, updates the cache
function updateCache(eventRequest) {
	return fetch(eventRequest).then(function(response) {
		// Check if we received a valid response
		if (!response || response.status !== 200 || response.type !== 'basic') {
			return response;
		}
		var responseToCache = response.clone();

		caches.open(CACHE_NAME)
			.then(function (cache) {
				cache.put(eventRequest, responseToCache);
			});
		return response;
	})
}


self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				// Cache hit - return response
				if (response) {
					setTimeout(() => updateCache(event.request.clone()), 100);
					return response;
				}

				// IMPORTANT: Clone the request. A request is a stream and
				// can only be consumed once. Since we are consuming this
				// once by cache and once by the browser for fetch, we need
				// to clone the response.
				var fetchRequest = event.request.clone();
				return updateCache(fetchRequest);
				// return fetch(fetchRequest).then(
				// 	function (response) {
				// 		// Check if we received a valid response
				// 		if (!response || response.status !== 200 || response.type !== 'basic') {
				// 			return response;
				// 		}

				// 		// IMPORTANT: Clone the response. A response is a stream
				// 		// and because we want the browser to consume the response
				// 		// as well as the cache consuming the response, we need
				// 		// to clone it so we have two streams.
				// 		var responseToCache = response.clone();

				// 		caches.open(CACHE_NAME)
				// 			.then(function (cache) {
				// 				cache.put(event.request, responseToCache);
				// 			});

				// 		return response;
				// 	}
				// );
			})
	);
});


self.addEventListener('activate', function (event) {

	var cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
