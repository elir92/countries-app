"use strict";var precacheConfig=[["/countries-app/index.html","2e05363186adc7b6c2a70540dd976df3"],["/countries-app/static/css/main.5c9bf8a1.css","1f76cb69176cc1688fb29c3bf87f3aca"],["/countries-app/static/js/0.5804ea1b.chunk.js","db146febfd75a42409c5b8985a3fa9c9"],["/countries-app/static/js/1.6320245b.chunk.js","ec9c87f9aecee2b4d7d6873b05e487f1"],["/countries-app/static/js/main.9918eb53.js","6dd0c584266a2c37ec0d35c204e5b817"],["/countries-app/static/media/fa-brands-400.48461ea4.woff2","48461ea4e797c9774dabb4a0440d2f56"],["/countries-app/static/media/fa-brands-400.7b464e27.woff","7b464e274bc331f9a765d765359635a5"],["/countries-app/static/media/fa-brands-400.947b9537.ttf","947b9537bc0fecc8130d48eb753495a1"],["/countries-app/static/media/fa-brands-400.9b6c8da3.eot","9b6c8da3c489424e2b3e9c9fb6314b37"],["/countries-app/static/media/fa-brands-400.b5472631.svg","b5472631dbace30d549357ec325b9c62"],["/countries-app/static/media/fa-regular-400.381af09a.woff","381af09a1366b6c2ae65eac5dd6f0588"],["/countries-app/static/media/fa-regular-400.73fe7f1e.ttf","73fe7f1effbf382f499831a0a9f18626"],["/countries-app/static/media/fa-regular-400.7422060c.eot","7422060ca379ee9939d3b687d072acad"],["/countries-app/static/media/fa-regular-400.949a2b06.woff2","949a2b066ec37f5a384712fc7beaf2f1"],["/countries-app/static/media/fa-regular-400.b5a61b22.svg","b5a61b229c9c92a6ac21f5b0e3c6e9f1"],["/countries-app/static/media/fa-solid-900.0079a0ab.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/countries-app/static/media/fa-solid-900.14a08198.woff2","14a08198ec7d1eb96d515362293fed36"],["/countries-app/static/media/fa-solid-900.38508b2e.svg","38508b2e7fac045869a86a15936433f7"],["/countries-app/static/media/fa-solid-900.70e65a7d.eot","70e65a7d34902f2c350816ecfe2f6492"],["/countries-app/static/media/fa-solid-900.815694de.woff","815694de1120d6c1e9d1f0895ee81056"],["/countries-app/static/media/globe.de21dbaf.svg","de21dbaf337c6f8beb068c44e8a427f9"],["/countries-app/static/media/react-logo.c182efec.svg","c182efecc00f1e89677a42c045901fef"],["/countries-app/static/media/redux-logo.5142d43f.svg","5142d43f55ec46aab3ebbcc59cc8dc2f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/countries-app/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});