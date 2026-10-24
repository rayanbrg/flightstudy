// Altitud: guarda l'app perquè s'obri ràpid i funcioni sense connexió
const VERSIO = "altitud-v4";
const LOCALS = ["./", "index.html", "manifest.webmanifest", "countries-110m.json", "countries-50m.json", "ciutats.json", "icon-192.png", "icon-512.png"];
const EXTERNS = [
  "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js",
  "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js",
  "https://cdn.jsdelivr.net/npm/maplibre-gl@5.24.0/dist/maplibre-gl.js"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSIO).then(async (c) => {
    await c.addAll(LOCALS);
    await Promise.all(EXTERNS.map((u) => c.add(u).catch(() => {})));
  }).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSIO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok) { const copia = r.clone(); caches.open(VERSIO).then((c) => c.put(e.request, copia)); }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
