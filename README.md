# The Story of JavaScript

Code for the YouTube series **The Story of JavaScript**, created by **Fahad Bin Zahid** ([Developer Fahad Jr](https://github.com/FahadJrdev)), which teaches the whole language by walking through its history in order.

We start in 1995 with why JavaScript was created, why it has a single thread and an event loop, and why it only ran in browsers. From there we follow every feature in the order it arrived (`var` → `let` → `const`, callbacks → Promises → `async/await`, and so on) up to the latest ECMAScript edition. Every chapter covers what problem the feature solved and how we use it today.

## How to use this repo

- One folder per episode: `epNN-short-name/` (NN = episode number).
- Files are numbered in the order they appear in the video.
- Unless a file says otherwise, the examples were run on **Node.js 24**. Run one with:
  ```
  node ep40-callbacks-to-async-await/02-callback.js
  ```
- Browser-only examples (DOM, `alert`, events) are marked in their first line. Paste them into the browser console or open the `.html` file.
- Some snippets are **fragments** shown on screen to explain an idea (e.g. `getUser(...)` in the callback-hell example). They aren't meant to run on their own.
- Episodes set in the past use **the code of that era**, so `var` shows up in 1995 episodes. Each of those episodes also shows how we'd write the same code today.

## Episodes

| Episode | Title | Code |
|---|---|---|
| 1 | Why JavaScript was created: the web in 1995 | [ep01-why-javascript](ep01-why-javascript/) |
| 2 | Ten Days in May (how JavaScript was built, and its frozen mistakes) | [ep02-ten-days](ep02-ten-days/) |
| 40 | From callbacks to async/await | [ep40-callbacks-to-async-await](ep40-callbacks-to-async-await/) |

*More episodes are added as they're published. The full list is on the YouTube playlist.*

## Created by

**Fahad Bin Zahid** ([@FahadJrdev](https://github.com/FahadJrdev)), a full-stack developer (Laravel, React, React Native) who has spent six years building booking, marketplace and logistics systems. The videos are published on the YouTube channel **Developer Fahad Jr**.

The history in this series comes from primary sources: the ECMA-262 specifications, the WHATWG HTML spec, TC39 proposals, and *JavaScript: The First 20 Years* (Wirfs-Brock & Eich, 2020).

## License

- **Code examples** (`.js` / `.html` files): **MIT**. Use them however you like.
- **Videos, scripts, narration, animations, thumbnails and the series name "The Story of JavaScript"**: © 2026 Fahad Bin Zahid, all rights reserved. Please don't re-upload or translate the videos without permission. Linking and sharing are welcome.
