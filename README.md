# TL MooMoo — Survival Arena

An original browser-based 2D survival arena inspired by the MooMoo.io genre.

## Features
- Singleplayer with wandering bots
- Multiplayer with a Node.js WebSocket server
- Harvest trees, rocks and bushes
- Build wooden walls (B, costs 15 wood)
- Leaderboard, health indicators, resources and touch controls

## Run
Node.js 18+ required.

```bash
npm install
npm start
```

Open http://localhost:3000. The multiplayer game requires deploying the Node.js server; GitHub Pages alone cannot run WebSockets.

## Controls
WASD / arrows to move; pointer to aim; click / Space to harvest; B to build. On mobile, use the joystick and attack button.

## Status
Alpha prototype: PvP, advanced bot AI, item progression and persistent accounts are not implemented yet.
