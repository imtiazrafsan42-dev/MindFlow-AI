const assets = [
  "/index.html",
  "/manifest.json",
  "/ai.js",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "/assets/river.mp3",
  "/assets/wind.mp3",
  "/assets/rain.mp3",
  "/assets/islamic.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mindflow").then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open("mindflow").then(cache =>
      cache.match(e.request).then(r => r || fetch(e.request))
    )
  );
});
