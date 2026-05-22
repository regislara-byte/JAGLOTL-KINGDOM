<div align="center">

```
     ██╗ █████╗  ██████╗ ██╗      ██████╗ ████████╗██╗
     ██║██╔══██╗██╔════╝ ██║     ██╔═══██╗╚══██╔══╝██║
     ██║███████║██║  ███╗██║     ██║   ██║   ██║   ██║
██   ██║██╔══██║██║   ██║██║     ██║   ██║   ██║   ██║
╚█████╔╝██║  ██║╚██████╔╝███████╗╚██████╔╝   ██║   ███████╗
 ╚════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝

           W A R C R A F T   K I N G D O M
```

**A solo-developer dark fantasy kingdom builder.**
*Build your Tore. Command your Legion. Rule the Void.*

## 🌐 Live Preview

### 🔐 Tore Login

[Open Tore Login](https://regislara-byte.github.io/JAGLOTL-KINGDOM/06_ASSETS/branding/)

### 🏰 Tore Home

[Open Tore Home](https://regislara-byte.github.io/JAGLOTL-KINGDOM/01_FRONTEND/home_tore_screen/)

---

![Phase](https://img.shields.io/badge/Phase-01%20FRONTEND-blueviolet?style=flat-square)
![Type](https://img.shields.io/badge/Type-Kingdom%20Builder-darkblue?style=flat-square)
![Audio](https://img.shields.io/badge/Audio-Engine%20Active-teal?style=flat-square)
![VLA](https://img.shields.io/badge/Powered%20by-VLA-8a2be2?style=flat-square)
![Dev](https://img.shields.io/badge/Workflow-Solo%20Dev-gold?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Vanilla%20HTML%20%2F%20CSS%20%2F%20JS-orange?style=flat-square)
![License](https://img.shields.io/badge/License-VAXINX%20Private-red?style=flat-square)
![Author](https://img.shields.io/badge/Author-Regis%20Lara-blue?style=flat-square)

</div>

---

## ᚦ Build Version

```
  Phase        01_FRONTEND
  State        Playable Prototype
  Mode         Solo Dev
  Architecture VLA — VAXINX Learning Architecture
  Status       Active Development
```

---

## ᚦ Quick Start

**Zero dependencies. Zero build step. Drop into VS Code. Open in browser.**

**PRIMARY LOGIN** — full cinematic experience with glowing card, ambient particles, music trigger, and gate transition:

```
06_ASSETS/branding/index.html
```

> This is the intended entry point. `06_ASSETS/branding/index.html` is the **PRIMARY LOGIN GATE** — cinematic login, audio engine activation, black fade transition into the Tore Home.

**DIRECT TORE ACCESS** — skip the login and enter the world immediately:

```
01_FRONTEND/home_tore_screen/index.html
```

> Opens the kingdom map directly. AudioEngine still initializes and fades in music on load, simulating the post-login state. All building interactions, modals, resource HUD, and build drawer are fully active.

> **Audio note:** Browser policy requires a user gesture before audio plays. Music only starts when the player clicks **Enter the Tore** from the login screen. Direct access triggers the fade-in on page load automatically.

---

## ᚦ Project Overview

**JAGLOTL-KINGDOM** is an original solo-developer fantasy strategy game inspired by base-building war games — built from scratch with no frameworks, no dependencies, and no backend in Phase 1.

The game is a **dark fantasy kingdom builder** with Nordic atmosphere, Warcraft-era visual weight, and a war room aesthetic. Every term, system, building, and asset is original. This is not a reskin. This is not a clone.

You are the warlord of the **TORE** — the great fortress-heart of your kingdom. You gather celestial resources, train your **Legion**, bond primordial **Beasts**, store forbidden **Relics**, and save your battle doctrines in the **Skilljar**.

> *The void doesn't forgive weakness. Build fast. Build smart. Build the Tore.*

---

## ᚱ Solo Dev Workflow

JAGLOTL-KINGDOM is built entirely by one developer using a structured, fast-iteration pipeline. Solo workflow. Structured iteration. Fast delivery.

```
  VISION
    ↓
  TREE STRUCTURE     — numbered folders define the entire game architecture upfront
    ↓
  AI BUILD SUPPORT   — AI generates modular code inside allowed folders only
    ↓
  VS CODE            — all files injected and validated directly in the editor
    ↓
  VLA                — VAXINX Learning Architecture governs structure and decisions
    ↓
  GITHUB             — version control at each phase milestone
    ↓
  SHIP               — working screen delivered per phase, no backend required
```

### Why This Works

**Tree architecture first.** The full folder structure (`00_ROOT` → `15_DOCS`) is defined before the first line of code. Every build decision is anchored to a folder. There is no drift.

**Visual lore artifacts.** Branding assets (`jaglotl_card_bg.png`, `jwkBG.png`, `jaglotl_logo_black.jpg`) are created and integrated before UI code is written. The aesthetic leads the engineering — not the other way around.

**Frontend-first approach.** Phase 1 ships a fully playable, visually cinematic experience with zero backend. The player gets a real login screen, real music, real building interactions, and real resource data — all from local files. Backend comes later, wired to existing hook comments.

**Fast solo iteration.** Each task is scoped to specific files and folders. `DO NOT TOUCH` rules are written into every spec. AI tools generate only what is permitted. The developer reviews, injects, validates. No scope creep.

**VLA as the operating layer.** The VAXINX Learning Architecture (`08_VLA/`) defines how the project thinks, structures, and evolves. It is the invisible backbone behind every naming convention, folder rule, and phase boundary.

---

## ᚢ VLA Memory Layer

The **VAXINX Learning Architecture** maintains a visual episode archive of every major build event. These are stored in `08_VLA/` and serve as the project's permanent memory — onboarding reference, phase history, and decision audit trail.

```
  08_VLA/
    ├── EP01_root_tree.jpeg       Phase 0 — Full folder architecture defined
    ├── EP02_login.jpeg           Phase 1 — VAXINX Tore Login screen built
    ├── EP03_tore_home.jpeg       Phase 1 — Tore Home HUD delivered
    ├── EP04_audio_engine.jpeg    Phase 1 — AudioEngine integrated (jwkbgmusic.mp3)
    └── EP05_music_hud.jpeg       Phase 1 — Music HUD: mute toggle + volume slider
```

**Purpose of the VLA archive:**

- **Build history** — every completed episode is a permanent snapshot of what was built, when, and why
- **Visual onboarding** — any new contributor can reconstruct the full project state by reading the episode sequence
- **Phase memory** — the archive replaces changelogs; it is the living record of the game's construction
- **Workflow archive** — decisions, folder rules, DO NOT TOUCH boundaries, and scope limits are embedded in each episode

> `08_VLA/` is a protected folder. Do not modify its contents during active build phases.

---

## ᚹ What Is This?

**JAGLOTL-KINGDOM** is a solo-built, original fantasy strategy game. The player commands a kingdom from their **TORE** — the fortress core — expanding outward through resource buildings, defensive structures, military units, beast companions, and a relic collection system.

The game is not multiplayer in Phase 1. It is not connected to any server. It runs entirely in the browser from local files. Every interaction — clicking a building, opening a modal, using the build drawer, triggering the music, watching the resource tick — is real, working code.

The world is dark. The atmosphere is Nordic. The architecture is war room. The name `JAGLOTL` is original. The crest is original. The lore is original. Nothing here is borrowed.

---

## ᚷ Core Terminology

| Term | Meaning |
|---|---|
| **TORE** | Main Fortress / Kingdom Core — the HQ all progression flows through |
| **SKILLJAR** | Vault of saved battle doctrines, army presets, relic combinations, hero formations |
| **JWAR** | War Tokens — the rarest resource, earned through combat |
| **Celestial Gold** | Primary currency — harvested from Celestial Mines |
| **Divine Elixir** | Upgrade fuel — distilled from Divine Shrines |
| **Void Essence** | Rare arcane resource — used for advanced upgrades |
| **Torium** | Heavy ore — required for siege units and constructs |
| **VLA** | VAXINX Learning Architecture — internal framework powering the project |

---

## ᛁ Screens

| Screen | Path | Role | Status |
|---|---|---|---|
| 🔐 **Tore Login** | `06_ASSETS/branding/index.html` | **PRIMARY LOGIN GATE** | ✅ Phase 1 |
| 🔐 **Legacy Login** | `01_FRONTEND/login/index.html` | Legacy entry point | ✅ Phase 1 |
| 🏰 **Tore Home** | `01_FRONTEND/home_tore_screen/index.html` | Kingdom map + HUD | ✅ Phase 1 |
| ⚔ **Legion** | `01_FRONTEND/` *(planned)* | Army management | 🔜 Phase 2 |
| 🗺 **World Map** | `01_FRONTEND/maps/` *(planned)* | Territory + raids | 🔜 Phase 2 |
| 🐉 **Beast Sanctum** | `01_FRONTEND/` *(planned)* | Pet bonding system | 🔜 Phase 2 |

---

## ᚹ The Buildings

| Building | Type | Function |
|---|---|---|
| 🏰 **Jaglotl Tore** | HQ | Main fortress. Unlocks all progression. |
| 🔨 **Builder Hut** | Utility | Houses builders. Enables construction queue. |
| ⛏ **Celestial Mine** | Resource | Generates Celestial Gold over time. |
| ⬡ **Divine Shrine** | Resource | Generates Divine Elixir over time. |
| 📜 **Skilljar** | Strategy | Saves battle presets, hero combos, relic loadouts. |
| 🐉 **Beast Sanctum** | Pet System | Tame, bond, and train primordial beasts. |
| 🗝 **Relic Vault** | Storage | Catalogues and preserves ancient relics. |
| 🗼 **Scout Tower** | Defense | Extends detection range. Warns of incoming raids. |
| ➕ **Empty Tiles** | Build Slot | Click to place new structures. |

---

## ᚾ Resources

| Resource | Icon | Color | Generation Source |
|---|---|---|---|
| Celestial Gold | ✦ | `#FFD700` Gold | Celestial Mine |
| Divine Elixir | ⬡ | `#9B59B6` Violet | Divine Shrine |
| Void Essence | ◈ | `#1ABC9C` Teal | Future: Void Extractor |
| Torium | ⬢ | `#E74C3C` Red | Future: Torium Quarry |
| JWAR | ⚔ | `#F39C12` Orange | Raids / PvP |

---

## ᚱ Project Architecture

```
JAGLOTL-KINGDOM/
│
├── 00_ROOT/                        # Root config, deploy scripts, README
│   ├── README.md                   ← You are here
│   ├── deploy_jaglotl.bat
│   ├── push_jaglotl.bat
│   └── setup.ps1
│
├── 01_FRONTEND/                    # ✅ ACTIVE — All UI and screens
│   ├── home_tore_screen/           # Kingdom map / main HUD
│   │   ├── index.html              # Game layout — top bar, map, panels, modals
│   │   ├── tore-home.css           # Full dark fantasy design system
│   │   └── tore-home.js            # Buildings, modal, resources, AudioEngine
│   │
│   ├── login/                      # ⚠ LEGACY LOGIN ENTRY — use branding/ instead
│   │   └── index.html
│   │
│   ├── ui_panels/                  # Floating panel modules
│   │   ├── scroll-log.js           # Event / activity log
│   │   └── quest-board.js          # Active quests + rewards
│   │
│   ├── modals/                     # Dialog overlays
│   │   └── notification-modal.js
│   │
│   ├── components/                 # Reusable UI atoms
│   │   └── resource-display.js
│   │
│   ├── maps/                       # Future: world map tiles
│   └── animations/                 # Future: cinematic FX
│
├── 02_GAMECORE/                    # ✅ ACTIVE — Core game logic
│   ├── state-manager.js            # Central state dispatcher
│   └── builder-queue.js            # Construction slot + timer engine
│
├── 03_LEGION/                      # 🔜 Phase 2 — Army system
├── 04_KINGDOMS/                    # 🔜 Phase 2 — Alliance / rival kingdoms
│
├── 05_DATA/                        # ✅ ACTIVE — JSON data layer
│   ├── resources.json              # Player + resource definitions
│   ├── buildings.json              # All building configs + costs
│   ├── tore_levels.json            # Tore upgrade progression tree
│   ├── units.json                  # Combat unit roster
│   ├── pets.json                   # Beast Sanctum creatures
│   └── skilljar.json               # Battle preset templates
│
├── 06_ASSETS/                      # ✅ ACTIVE — Media and branding
│   ├── branding/
│   │   ├── index.html              # 🔐 PRIMARY LOGIN GATE — VAXINX Tore Login
│   │   ├── jaglotl_card_bg.png     # Login hero card visual
│   │   ├── jaglotl_logo_black.jpg  # Header / medallion logo
│   │   └── jwkBG.png               # Crest background wash
│   ├── audio/
│   │   └── jwkbgmusic.mp3          # 🎵 Background ambient music
│   ├── buildings/                  # Building sprites (planned)
│   ├── characters/                 # Hero portraits (planned)
│   ├── effects/                    # Particle / VFX assets (planned)
│   ├── icons/                      # UI icons (planned)
│   ├── maps/                       # Map tile assets (planned)
│   ├── ui/                         # HUD elements (planned)
│   └── videos/                     # Cinematic cutscenes (planned)
│
├── 07_LORE/                        # 🔒 DO NOT TOUCH — World lore archive
├── 08_VLA/                         # 🔒 DO NOT TOUCH — VLA framework core
├── 09_DEPLOY/                      # 🔒 DO NOT TOUCH
├── 10_EXPERIMENTAL/                # Sandbox / prototypes
├── 11_BACKEND/                     # 🔒 DO NOT TOUCH — Future server layer
├── 12_STREAMING/                   # 🔒 DO NOT TOUCH
├── 13_CICD/                        # 🔒 DO NOT TOUCH
├── 14_BIGDATA/                     # 🔒 DO NOT TOUCH
└── 15_DOCS/                        # Documentation archive
```

---

## ᛟ Current Experience Flow

This is the complete player journey delivered in Phase 1:

```
  🔐  VAXINX TORE LOGIN             06_ASSETS/branding/index.html
        Cosmic void background
        Glowing blue card border
        jaglotl_card_bg.png hero strip
        jaglotl_logo_black.jpg medallion
        Email / access code field
        Social login placeholders
        ↓
  ✦   ENTER THE TORE  (button click)
        Form validates
        jwkbgmusic.mp3 fades in  ← triggered by user gesture, never autoplay
        Button enters loading state → "Channeling the Void..."
        ↓
  🎵  AUDIO FADE
        Volume rises from 0 → 0.70 over 2.5 seconds
        Music HUD appears (mute toggle + volume slider)
        ↓
  ⬛  GATE TRANSITION
        Black cinematic overlay fades to full opacity over 0.9 seconds
        window.location navigates to Tore Home
        ↓
  🏰  TORE HOME                      01_FRONTEND/home_tore_screen/index.html
        Page fades in — staggered entry animations on all panels
        AudioEngine re-initializes — music fades back in
        ↓
  📊  RESOURCE HUD
        Right sidebar: Celestial Gold, Divine Elixir, Void Essence, Torium, JWAR
        Live resource tick every 2 seconds — rates driven by resources.json
        ↓
  🏗   BUILD LAYER
        Click any building tile → modal opens with level, cost, bonuses, timer
        Click empty tile → Build Drawer slides up from bottom
        Bottom menu: Legion · Heroes · Relics · Pets · Build · Shop · Map
        Left panel: Scroll Log · Quest Board · Alliance · Raid · Lore · World Map
```

---

## ᛏ Current Status

```
  Module              Status        Notes
  ─────────────────────────────────────────────────────────
  Frontend            ✅ Complete   Login + Tore Home fully interactive
  GameCore            ✅ Complete   StateManager + BuilderQueue scaffolded
  Data Layer          ✅ Complete   6 JSON files seeded with sample data
  Audio Engine        ✅ Complete   Fade-in, mute, volume, zone hook ready
  Login Portal        ✅ Complete   PRIMARY: 06_ASSETS/branding/index.html
  Tore Home           ✅ Complete   Buildings, modals, HUD, resource tick
  ─────────────────────────────────────────────────────────
  Backend             🔒 Future     Phase 3 — 11_BACKEND/
  Streaming           🔒 Future     Phase 4 — 12_STREAMING/
  BigData             🔒 Future     Phase 4 — 14_BIGDATA/
```

---

## ᚨ Phase Roadmap

### ✅ Phase 1 — TORE Home Screen (COMPLETE)

The playable prototype. No server. No login required. Drop in VS Code and open.

- [x] Cinematic login screen with glowing blue card border and crest assets
- [x] `jwkbgmusic.mp3` triggered on **Enter the Tore** — no autoplay
- [x] Music fade-in over 2.5s, mute toggle, volume slider HUD
- [x] Cinematic black fade transition → Tore Home
- [x] Full Tore Home HUD — top bar, left panel, right resource bar, bottom menu
- [x] Interactive building tiles — click any building → modal opens
- [x] Building modal — name, level, bonuses, upgrade cost, timer placeholder
- [x] Empty tile click → Build Drawer slides up from bottom
- [x] Fake real-time resource tick (Celestial Gold, Elixir, Void Essence, Torium, JWAR)
- [x] Toast notification system
- [x] 6 JSON data files seeded with full sample data
- [x] Central StateManager + BuilderQueue skeleton in `02_GAMECORE/`
- [x] All future hook comments in place

---

### 🔜 Phase 2 — Legion & Battle System

- [ ] Legion screen — train, queue, deploy units
- [ ] Hero system — hero cards, XP, abilities
- [ ] Relic system — vault, equip, combine
- [ ] Beast Sanctum — bond and level up pets
- [ ] Skilljar UI — save and load battle presets
- [ ] Raid targeting — scout and attack rival kingdoms
- [ ] Alliance panel — join / create alliances
- [ ] World Map — kingdom nodes, territory control

---

### 🔜 Phase 3 — Backend & Multiplayer

- [ ] REST API — `11_BACKEND/` (Node or Python)
- [ ] Auth — player accounts, session tokens
- [ ] Real-time resource sync
- [ ] Raid PvP — async attack resolution
- [ ] Leaderboards and alliance rankings

---

### 🔜 Phase 4 — Streaming & BigData

- [ ] Live streaming integration — `12_STREAMING/`
- [ ] Analytics pipeline — `14_BIGDATA/`
- [ ] Player telemetry and progression heatmaps

---

## ᛟ Design System

### Fonts
| Role | Font |
|---|---|
| Display / Title | `Cinzel Decorative` — 700, 900 |
| UI Labels | `Cinzel` — 400, 600, 700 |
| Body / Flavor | `Crimson Pro` — 300, 400, 600, italic |

### Color Palette
```
--col-bg:           #0a0b0f   Deep void black
--col-surface:      #111420   Panel surface
--col-gold:         #c9a227   Kingdom gold
--col-gold-bright:  #f0c040   Accent gold
--col-violet:       #7c4dff   Arcane violet
--col-blue:         #20a0ff   Celestial blue (login, HUD)
--col-teal:         #1abc9c   Void teal
--col-red:          #e74c3c   War red
--col-rune:         #8fa8cc   Rune glyph
```

### Rune Alphabet Used
`ᚦ ᚢ ᚷ ᚹ ᚾ ᚱ ᛁ ᚨ ᛟ ᛏ` — Elder Futhark, decorative use only.

---

## ᚨ How to Run (Phase 1)

**Zero dependencies. Zero build step. Just files.**

```bash
# PRIMARY — Start here. Full cinematic experience with audio and transition:
06_ASSETS/branding/index.html

# DIRECT ACCESS — Skip login, open Tore Home immediately:
01_FRONTEND/home_tore_screen/index.html
```

> **Audio note:** Browser policy requires a user gesture before audio plays.
> `jwkbgmusic.mp3` only starts when the player clicks **Enter the Tore**.
> Opening `home_tore_screen/index.html` directly will still fade in the music on load,
> simulating the post-login state.

---

## ᚦ Future Hook Comments

Every placeholder in the codebase is marked for future integration:

```js
// future backend hook:  → replace with real API call
// future save logic:    → add localStorage or server sync
// future builder queue: → connect to BuilderQueue module
// future battle system: → connect to Legion / Raid modules
// future audio hook:    → zone-based track manager
```

When Phase 2 begins, grep these tags to surface every integration point instantly:

```bash
grep -r "future backend hook" ./
grep -r "future audio hook" ./
grep -r "future battle system" ./
```

---

## ᚱ File Dependencies Map

```
06_ASSETS/branding/index.html          ← PRIMARY LOGIN GATE
  ├── jaglotl_card_bg.png               hero card image
  ├── jaglotl_logo_black.jpg            medallion logo
  ├── jwkBG.png                         crest background wash
  ├── ../audio/jwkbgmusic.mp3           music (user-gesture triggered)
  └── ──► navigates to ──►
        01_FRONTEND/home_tore_screen/index.html
          ├── tore-home.css
          ├── tore-home.js
          │     ├── AudioEngine              fade-in, mute, volume
          │     ├── StateManager             02_GAMECORE/state-manager.js
          │     └── BuilderQueue             02_GAMECORE/builder-queue.js
          └── ../../06_ASSETS/audio/jwkbgmusic.mp3
```

---

## ᛁ Data Layer

All game data lives in `05_DATA/` as flat JSON. No database in Phase 1.

| File | Contents |
|---|---|
| `resources.json` | Player info, all 5 resource configs, amounts, max, per-hour rates |
| `buildings.json` | All building definitions — level, cost, bonuses, grid position |
| `tore_levels.json` | Tore upgrade tree — what each level unlocks |
| `units.json` | Combat unit roster — attack, defense, HP, train cost/time |
| `pets.json` | Beast Sanctum creatures — rarity, ability, passive bonus |
| `skilljar.json` | 3 saved battle presets — formation, units, pet, hero, relics |

---

## ⚔ Lore Fragment

> *The Tore was not built. It was remembered.*
>
> *When the first kingdom fell to the Void, a fragment of its fortress-heart survived —
> a crystallized memory of what power once looked like.
> Sigeralarlotl found it buried under the ash fields of the old world,
> still warm, still breathing.*
>
> *They call it the Jaglotl Tore now.
> A living fortress. A kingdom in seed form.
> Everything you build, it remembers.*
>
> — *Scroll of the First Builder, recovered from the Relic Vault*

---

## ᚷ Credits

```
Project Lead / Solo Developer    Regis Lara
Studio                           VAXINX
Engine                           VLA (VAXINX Learning Architecture)
Stack                            Vanilla HTML5 / CSS3 / ES6
Fonts                            Google Fonts (Cinzel Decorative, Cinzel, Crimson Pro)
Music                            jwkbgmusic.mp3 (original composition)
Assets                           Original — no third-party IP used
Inspiration                      Base-building strategy genre (original concept only)
```

---

## ᚦ License

```
JAGLOTL-KINGDOM is a private project by Regis Lara / VAXINX.
All assets, lore, system designs, and code are original works.
No third-party logos, brands, or copyrighted material are used.
Redistribution or commercial use requires explicit written permission.

© 2026 VAXINX — Regis Lara. All rights reserved.
```

---

<div align="center">

*VLA Powered · JAGLOTL KINGDOM · VAXINX © 2026*

```
ᚦ  ᚢ  ᚷ  ᚹ  ᚾ  ᚱ  ᛁ  ᚨ  ᛟ  ᛏ
```

</div>
