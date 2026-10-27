# CS336 POGIL: Components, Props, and Data Flow — Sandboxes

Runnable projects for the "Components, Props, and Data Flow" activity. Each folder is a
separate project that opens in StackBlitz, where students click **Fork** to get their own copy.

| Folder     | Used in             | What it contains                                             |
| ---------- | ------------------- | ------------------------------------------------------------ |
| `vanilla/` | Model I             | One card with a Like button: `index.html`, `style.css`, `app.js` |
| `vue/`     | Models II–IV        | `LikeButton.vue`, `CatCard.vue`, `App.vue`                   |
| `react/`   | Models II–IV        | `LikeButton.jsx`, `CatCard.jsx`, `App.jsx`                   |
| `svelte/`  | Models II–IV        | `LikeButton.svelte`, `CatCard.svelte`, `App.svelte` (Svelte 5) |
| `angular/` | Models II–IV        | `like-button.ts`, `cat-card.ts`, `cat.ts`, `app.ts` (standalone, signals) |

Each framework app renders the Model II Like button above the Model IV cat list.

## StackBlitz links

Push this folder to a public GitHub repo, then replace `VictorNorman/cs336-components-pogil` below:

- Model I (vanilla): `https://stackblitz.com/github/VictorNorman/cs336-components-pogil/tree/main/vanilla?file=app.js`
- Vue: `https://stackblitz.com/github/VictorNorman/cs336-components-pogil/tree/main/vue?file=src/App.vue`
- React: `https://stackblitz.com/github/VictorNorman/cs336-components-pogil/tree/main/react?file=src/App.jsx`
- Svelte: `https://stackblitz.com/github/VictorNorman/cs336-components-pogil/tree/main/svelte?file=src/App.svelte`
- Angular: `https://stackblitz.com/github/VictorNorman/cs336-components-pogil/tree/main/angular?file=src/app/app.ts`

StackBlitz needs a Chromium browser such as Chrome or Edge. It reads each folder's `.stackblitzrc`, installs dependencies, and starts the dev
server automatically. Students' edits stay in their own fork; the repo is never changed.

## Running locally

```sh
cd vue        # or vanilla, react, svelte, angular
npm install
npm run dev   # Angular: npm start
```

## Instructor notes (verified in a browser)

- **Q4 (vanilla):** after changing the id to `like-btn`, the console shows
  `Cannot read properties of null (reading 'addEventListener')` pointing at `app.js:4`.
- **Q31 (mutating `cat.adopted` inside CatCard):**
  - React: nothing on screen changes (header stays "2 cats available", no "(adopted)").
  - Vue: header and card both update, no console warning.
  - Svelte: header and card both update, and the dev console logs an
    `ownership_invalid_mutation` warning ("Mutating unbound props … is strongly discouraged").
  - Angular: the card shows "(adopted)" but the header stays "2 cats available".

Versions: Vite 7 (Vite 8 does not run in StackBlitz), Vue 3.5, React 19, Svelte 5, Angular 21 (zoneless, TypeScript 5.9; Angular 22 requires Vite 8, which does not run in StackBlitz).
