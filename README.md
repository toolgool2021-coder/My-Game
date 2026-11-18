# TL MooMoo — Survival Arena

Browser-based survival game inspired by the MooMoo.io genre, with original visuals and implementation.

## Play
Install Node.js 18+ and run:

```sh
npm install
npm start
```

Open **http://localhost:3000**. Choose **Singleplayer** for an offline-style local game, or **Multiplayer** to connect to the Node.js WebSocket server. Multiplayer works when multiple players open the same hosted URL.

## Features
- 4200×4200 world, trees, stone, food and gold deposits
- Singleplayer bots, wildlife and combat
- Server-authoritative multiplayer movement, harvesting, player combat and respawns
- Four buildables: wall, spike, gold mill and defensive turret
- Food healing, level progression, stone sword upgrade
- Leaderboard, kills, clan tags, chat, mobile touch controls
- Server health endpoint and GitHub Actions syntax/startup checks

## Controls
WASD / arrows: move. Mouse: aim. Click or Space: attack/harvest. 1–4: build wall/spike/mill/turret. Q: eat food. U: upgrade weapon (level 3, 40 wood and 30 stone). C: clan tag. Enter: chat.

## Deploy
Deploy as a **Node.js web service**. A `render.yaml` blueprint is included for Render. Render free services may sleep when idle. GitHub Pages cannot host the WebSocket server. No database is required, but progress resets on restart and disconnect.

## Current limitations
Alpha release: no persistent accounts, moderation, matchmaking, secure identity, database or large-scale load testing. Designed for small casual multiplayer sessions; do not treat as a production-hardened public service.
