# Altitud

Temporitzador de concentració en forma de vols. Tries quant de temps vols concentrar-te, reserves un vol fins a una ciutat a aquella distància i segueixes l'avió sobre un globus real fins que aterres.

## Què fa

- Mapa WebGL (MapLibre) amb globus, països reals, zona de nit en temps real i tres càmeres: **Pilot** (3D, darrere de l'avió), **Seguir** i **Ruta**.
- Plànol de seients amb Turista, Preferent (a les 5 h de vol) i Business (a les 20 h).
- Finestreta animada segons l'hora del dia allà on és l'avió.
- Avisos de cabina, objectiu per a cada vol, escales de 5 o 10 minuts.
- Diari de vol, ratxa de dies, passaport amb segells i insígnies.

## Instal·lar-la a Windows

Obre la web amb Chrome o Edge i fes clic a la icona d'instal·lar de la barra d'adreces (o menú → *Instal·la Altitud*). Queda com una app pròpia i funciona sense connexió.

## Dades

En aquesta versió web les dades es guarden al navegador (localStorage). L'enllaç amb el mòbil per detectar turbulències funciona a la versió que s'obre des de Claude.

## Fitxers

- `index.html` — tota l'app
- `countries-110m.json`, `countries-50m.json` — mapes de [Natural Earth](https://www.naturalearthdata.com/) via [world-atlas](https://github.com/topojson/world-atlas) (domini públic)
- `ciutats.json` — ciutats de més de 40.000 habitants, de [GeoNames](https://www.geonames.org/) (CC BY 4.0)
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — per instal·lar-la com a app
