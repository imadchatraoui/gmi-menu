# Menu YMHS · GMI Torino

Menu del **Youth Mental Health Summit**, domenica **25 ottobre 2026**, Casa del Quartiere di San Salvario, Torino. Due proposte: tonno e avocado; pollo e tahina.

## Sviluppo e build

Node.js 22.12 o successivo. Font Manrope ospitato localmente, licenza in `public/fonts/OFL.txt`.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Il dominio del progetto è https://menu.musulmani.org/. Il repository è collegato a Vercel: verificare lo status del commit e il dominio dopo un push a main. Non aggiungere token o `.env` al repository.

## Contenuti

- `content/ymhs-menu.json`: ricette e dati evento. Modificare qui ingredienti, alternative, allergeni, data o link ufficiali.
- `src/YmhsContent.jsx`: sezioni condivise con la versione `/menu` del Site GMI Torino.
- `src/ymhs.css`: identità bordeaux/oro, layout mobile e stampa.
- `public/media/ymhs/`: immagini WebP illustrative. Prompt e provenienza in `docs/ymhs-images.json`; originali conservati nel workspace di authoring.
- `docs/ymhs-event-sources.json`: fonti primarie verificate il 14 ottobre 2026.
- `public/privacy.html`: informativa locale accessibile anche senza account ChatGPT.

L’HTML iniziale include anche una versione testuale del menu per i browser senza JavaScript. Le informazioni di iscrizione aprono il modulo ufficiale; il sito non raccoglie ordini o iscrizioni. Nessun analytics, pixel, font remoto, embed social o salvataggio di preferenze nel browser.

## Responsive e movimento

Il menu è progettato prima per telefono: due scelte raggiungibili dalla barra ancorata, ingredienti leggibili senza espandere pannelli, controlli con area di tocco comoda e nessuna intro obbligatoria. Le immagini e le cornici si spostano insieme con lo scroll; `prefers-reduced-motion` rende statici gli spostamenti. Il bundle attivo non importa Three.js, OGL, GSAP o i vecchi canvas, pur conservando le dipendenze e i componenti precedenti per non eliminarli arbitrariamente.

Le immagini illustrano le composizioni e non attestano preparazione, provenienza degli alimenti o certificazioni. Gli allergeni segnalati si basano sugli ingredienti forniti: lo staff deve verificare ricette complete e contaminazioni prima del servizio. Non presentare l’opzione al pollo come senza latte, senza glutine o halal senza conferma organizzativa.
