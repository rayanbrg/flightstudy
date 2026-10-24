// Altitud: guarda l'app perquè funcioni sense connexió
const VERSIO = "altitud-v3";
const FITXERS = ["./", "index.html", "manifest.webmanifest", "countries-110m.json", "countries-50m.json", "ciutats.json", "icon-192.png", "icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js", "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSIO).then((c) => c.addAll(FITXERS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSIO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((r) => {
      const copia = r.clone();
      if (r.ok) caches.open(VERSIO).then((c) => c.put(e.request, copia));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
