/**
 * JAGLOTL-KINGDOM — tore-home.js
 * Phase 1: Tore Home Screen — local state, no backend.
 *
 * // future backend hook: replace localState with API calls
 * // future save logic: persist state to localStorage or server
 * // future builder queue: hook buildQueue module
 * // future battle system: hook legion/raid modules
 */

'use strict';

/* ══════════════════════════════════════════════════════
   LOCAL STATE (placeholder — future backend hook)
══════════════════════════════════════════════════════ */
const localState = {
  player: {
    name: 'Sigeralarlotl',
    level: 7,
    xp: 3420,
    xpNext: 5000,
    builders: { total: 3, available: 2 },
    shield: { active: true, hoursLeft: 12 },
    notifications: 3,
  },
  resources: {
    celestialGold: { label: 'Celestial Gold', icon: '✦', color: '#FFD700', amount: 124500, max: 500000 },
    divineElixir:  { label: 'Divine Elixir',  icon: '⬡', color: '#9B59B6', amount: 87200,  max: 300000 },
    voidEssence:   { label: 'Void Essence',   icon: '◈', color: '#1ABC9C', amount: 3450,   max: 20000  },
    torium:        { label: 'Torium',          icon: '⬢', color: '#E74C3C', amount: 1200,   max: 10000  },
    jwar:          { label: 'JWAR',            icon: '⚔', color: '#F39C12', amount: 580,    max: 5000   },
  },

  /* building layout on the map grid */
  buildings: [
    {
      id: 'tore', name: 'Jaglotl Tore', type: 'hq', level: 7, maxLevel: 25,
      icon: '🏰', rune: 'ᚦ',
      description: 'The great fortress-heart of your kingdom. All progression flows from the Tore.',
      bonuses: ['Unlocks new buildings', '+5% defense bonus', 'Increases builder capacity'],
      upgradeCost: { celestialGold: 85000, divineElixir: 40000, torium: 200 },
      upgradeTimeSec: 172800,
      pos: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    },
    {
      id: 'builder_hut', name: 'Builder Hut', type: 'utility', level: 3, maxLevel: 10,
      icon: '🔨', rune: 'ᚱ',
      description: 'Houses the master builders who construct and upgrade your kingdom.',
      bonuses: ['+1 builder at level 5', 'Faster construction'],
      upgradeCost: { celestialGold: 12000, divineElixir: 6000 },
      upgradeTimeSec: 28800,
      pos: { top: '22%', left: '24%' },
    },
    {
      id: 'celestial_mine', name: 'Celestial Mine', type: 'resource', level: 5, maxLevel: 15,
      icon: '⛏', rune: 'ᚷ',
      description: 'Channels celestial ley-lines to harvest raw golden essence.',
      bonuses: ['+400 gold/hr', 'Increased storage cap'],
      upgradeCost: { celestialGold: 18000, torium: 50 },
      upgradeTimeSec: 43200,
      pos: { top: '20%', left: '65%' },
    },
    {
      id: 'divine_shrine', name: 'Divine Shrine', type: 'resource', level: 4, maxLevel: 15,
      icon: '⬡', rune: 'ᚹ',
      description: 'A sacred altar that distills elixir from divine breath and moonfall.',
      bonuses: ['+300 elixir/hr', '+1 ritual slot'],
      upgradeCost: { celestialGold: 15000, divineElixir: 8000 },
      upgradeTimeSec: 36000,
      pos: { top: '68%', left: '24%' },
    },
    {
      id: 'skilljar', name: 'Skilljar', type: 'strategy', level: 2, maxLevel: 10,
      icon: '📜', rune: 'ᚾ',
      description: 'Vault of learned doctrines — store and recall battle formations, hero combos, relic loadouts.',
      bonuses: ['+2 preset slots', 'Unlock advanced formations'],
      upgradeCost: { celestialGold: 22000, voidEssence: 300 },
      upgradeTimeSec: 57600,
      pos: { top: '68%', left: '65%' },
    },
    {
      id: 'beast_sanctum', name: 'Beast Sanctum', type: 'pet', level: 1, maxLevel: 10,
      icon: '🐉', rune: 'ᚢ',
      description: 'Where primordial beasts are tamed, bonded, and trained for war and scouting.',
      bonuses: ['+1 beast slot', 'Unlock rare beasts'],
      upgradeCost: { celestialGold: 30000, voidEssence: 500, jwar: 100 },
      upgradeTimeSec: 86400,
      pos: { top: '76%', left: '56%' },
    },
    {
      id: 'relic_vault', name: 'Relic Vault', type: 'storage', level: 1, maxLevel: 10,
      icon: '🗝', rune: 'ᛟ',
      description: 'Sealed chamber of rune-iron where ancient relics are catalogued and preserved.',
      bonuses: ['+5 relic storage', 'Unlock relic fusion'],
      upgradeCost: { celestialGold: 25000, torium: 150 },
      upgradeTimeSec: 72000,
      pos: { top: '76%', left: '33%' },
    },
    {
      id: 'scout_tower', name: 'Scout Tower', type: 'defense', level: 3, maxLevel: 15,
      icon: '🗼', rune: 'ᛏ',
      description: 'A vigilant watchtower that surveys the horizon and warns of incoming threats.',
      bonuses: ['+15% detection range', 'Early raid warning'],
      upgradeCost: { celestialGold: 9000, divineElixir: 4500 },
      upgradeTimeSec: 21600,
      pos: { top: '18%', left: '47%' },
    },
    // Empty build tiles
    { id: 'empty_1', type: 'empty', pos: { top: '38%', left: '18%' } },
    { id: 'empty_2', type: 'empty', pos: { top: '38%', left: '74%' } },
    { id: 'empty_3', type: 'empty', pos: { top: '82%', left: '44%' } },
  ],

  /* Available buildable structures (for build drawer) */
  buildables: [
    { id: 'void_extractor', name: 'Void Extractor', icon: '◈', locked: true, reason: 'Tore Lv8' },
    { id: 'rune_forge',     name: 'Rune Forge',     icon: '⚒',  locked: true, reason: 'Tore Lv9' },
    { id: 'barracks',       name: 'Barracks',        icon: '🪖', locked: true, reason: 'Tore Lv10' },
  ],
};

/* ══════════════════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════════════════ */
const DOM = {
  mapGround:    document.getElementById('mapGround'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalClose:   document.getElementById('modalClose'),
  modalIcon:    document.getElementById('modalIcon'),
  modalTitle:   document.getElementById('modalTitle'),
  modalLevel:   document.getElementById('modalLevel'),
  modalRune:    document.getElementById('modalRune'),
  modalDesc:    document.getElementById('modalDesc'),
  modalBonuses: document.getElementById('modalBonuses'),
  modalCosts:   document.getElementById('modalCosts'),
  modalCostRow: document.getElementById('modalCostRow'),
  modalTimer:   document.getElementById('modalTimer'),
  modalUpgradeBtn: document.getElementById('modalUpgradeBtn'),
  modalNextLevel:  document.getElementById('modalNextLevel'),
  buildDrawer:  document.getElementById('buildDrawer'),
  buildDrawerGrid: document.getElementById('buildDrawerGrid'),
  toastContainer: document.getElementById('toastContainer'),
  bottomBtns:   document.querySelectorAll('.bottom-btn'),
  leftBtns:     document.querySelectorAll('.left-btn'),
};

/* ══════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════ */
function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000)    return (n / 1000).toFixed(1) + 'K';
  return n.toLocaleString();
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m.toString().padStart(2,'0')}m`;
  return `${m}m`;
}

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  DOM.toastContainer.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

/* ══════════════════════════════════════════════════════
   RENDER BUILDINGS
══════════════════════════════════════════════════════ */
function renderBuildings() {
  DOM.mapGround.innerHTML = '';

  localState.buildings.forEach((b, idx) => {
    const tile = document.createElement('div');
    tile.className = 'building-tile';
    tile.style.animationDelay = `${idx * 0.06 + 0.3}s`;

    // Position
    Object.entries(b.pos).forEach(([k, v]) => { tile.style[k] = v; });
    tile.style.position = 'absolute';

    if (b.type === 'empty') {
      tile.classList.add('building-tile--empty');
      tile.innerHTML = `<span class="building-tile__add-icon">+</span>`;
      tile.setAttribute('title', 'Empty — Click to build');
      tile.addEventListener('click', () => openBuildDrawer());
    } else {
      if (b.type === 'hq') tile.classList.add('building-tile--hq');

      tile.innerHTML = `
        <span class="building-tile__rune">${b.rune}</span>
        <span class="building-tile__icon">${b.icon}</span>
        <span class="building-tile__name">${b.name}</span>
        <span class="building-tile__level">Lv ${b.level}</span>
      `;
      tile.setAttribute('title', b.name);
      tile.setAttribute('data-building-id', b.id);
      tile.addEventListener('click', () => openBuildingModal(b.id));
    }

    DOM.mapGround.appendChild(tile);
  });
}

/* ══════════════════════════════════════════════════════
   BUILDING MODAL
══════════════════════════════════════════════════════ */
function openBuildingModal(buildingId) {
  const b = localState.buildings.find(x => x.id === buildingId);
  if (!b || b.type === 'empty') return;

  DOM.modalIcon.textContent  = b.icon;
  DOM.modalTitle.textContent = b.name;
  DOM.modalLevel.textContent = `Level ${b.level}`;
  DOM.modalRune.textContent  = b.rune;
  DOM.modalDesc.textContent  = b.description;
  DOM.modalNextLevel.textContent = b.level + 1;

  // Bonuses
  DOM.modalBonuses.innerHTML = (b.bonuses || [])
    .map(bonus => `<div class="modal__bonus">${bonus}</div>`)
    .join('');

  // Costs
  const costs = b.upgradeCost || {};
  const costKeys = Object.keys(costs);
  if (costKeys.length > 0) {
    DOM.modalCostRow.style.display = '';
    DOM.modalCosts.innerHTML = costKeys.map(key => {
      const res = localState.resources[key];
      const icon  = res ? res.icon  : '?';
      const color = res ? res.color : '#fff';
      const label = res ? res.label : key;
      return `<div class="modal__cost-chip">
        <span style="color:${color}">${icon}</span>
        <span>${formatNumber(costs[key])} ${label}</span>
      </div>`;
    }).join('');
  } else {
    DOM.modalCostRow.style.display = 'none';
  }

  // Timer
  DOM.modalTimer.textContent = formatTime(b.upgradeTimeSec || 0);
  // future builder queue hook: check if builder is available

  DOM.modalOverlay.setAttribute('aria-hidden', 'false');
  DOM.modalOverlay.classList.add('is-open');

  // future save logic: track selected building in state
}

function closeBuildingModal() {
  DOM.modalOverlay.classList.remove('is-open');
  DOM.modalOverlay.setAttribute('aria-hidden', 'true');
}

DOM.modalClose.addEventListener('click', closeBuildingModal);
DOM.modalOverlay.addEventListener('click', e => {
  if (e.target === DOM.modalOverlay) closeBuildingModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBuildingModal();
});

DOM.modalUpgradeBtn.addEventListener('click', () => {
  // future backend hook: send upgrade request
  showToast('⚒  Upgrade queued! Builder dispatched.');
  closeBuildingModal();
});

/* ══════════════════════════════════════════════════════
   BUILD DRAWER
══════════════════════════════════════════════════════ */
function openBuildDrawer() {
  renderBuildDrawer();
  DOM.buildDrawer.classList.add('is-open');
  DOM.buildDrawer.setAttribute('aria-hidden', 'false');
}

function closeBuildDrawer() {
  DOM.buildDrawer.classList.remove('is-open');
  DOM.buildDrawer.setAttribute('aria-hidden', 'true');
}

function renderBuildDrawer() {
  DOM.buildDrawerGrid.innerHTML = localState.buildables.map(item => `
    <div class="build-item ${item.locked ? 'build-item--locked' : ''}"
         title="${item.locked ? 'Requires ' + item.reason : item.name}"
         data-build="${item.id}">
      <span class="build-item__icon" style="opacity:${item.locked ? 0.4 : 1}">${item.icon}</span>
      <span class="build-item__name">${item.name}</span>
      ${item.locked ? `<span style="font-size:9px;color:#f39c12;font-family:var(--font-title)">${item.reason}</span>` : ''}
    </div>
  `).join('');

  DOM.buildDrawerGrid.querySelectorAll('.build-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.build;
      const b = localState.buildables.find(x => x.id === id);
      if (b && b.locked) {
        showToast(`🔒  Locked — Requires ${b.reason}`);
      } else {
        showToast(`🔨  ${b.name} — Select a tile to place`);
        closeBuildDrawer();
        // future builder queue hook: enter placement mode
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   BOTTOM MENU
══════════════════════════════════════════════════════ */
DOM.bottomBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    // deactivate all
    DOM.bottomBtns.forEach(b => b.classList.remove('bottom-btn--active'));

    if (tab === 'build') {
      const isOpen = DOM.buildDrawer.classList.contains('is-open');
      if (isOpen) {
        closeBuildDrawer();
      } else {
        btn.classList.add('bottom-btn--active');
        openBuildDrawer();
      }
    } else {
      closeBuildDrawer();
      btn.classList.add('bottom-btn--active');
      // future battle system: dispatch to legion/heroes/relics/pets/shop/map screens
      showToast(`⚔  ${tab.charAt(0).toUpperCase() + tab.slice(1)} — Coming in Phase 2`);
    }
  });
});

/* ══════════════════════════════════════════════════════
   LEFT PANEL
══════════════════════════════════════════════════════ */
DOM.leftBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const labels = {
      'scroll-log': '📜  Scroll Log — No entries yet',
      'quest-board': '⚜  Quest Board — 2 quests active',
      'alliance': '🛡  Alliance — Not yet joined',
      'raid': '⚔  Raid — No active raids',
      'lore-chat': '🔮  Lore Chat — Coming in Phase 2',
      'world-map': '🗺  World Map — Coming in Phase 2',
    };
    showToast(labels[action] || action);
  });
});

/* ══════════════════════════════════════════════════════
   RESOURCE TICK (fake real-time)
   // future backend hook: replace with server-sent events or polling
══════════════════════════════════════════════════════ */
const RESOURCE_RATES = {
  celestialGold: 2400 / 3600,  // per second
  divineElixir:  1800 / 3600,
  voidEssence:    120 / 3600,
  torium:          60 / 3600,
  jwar:            30 / 3600,
};

let lastTick = Date.now();

function tickResources() {
  const now = Date.now();
  const delta = (now - lastTick) / 1000; // seconds
  lastTick = now;

  Object.entries(RESOURCE_RATES).forEach(([key, rate]) => {
    const res = localState.resources[key];
    res.amount = Math.min(res.max, res.amount + rate * delta);
    const el = document.getElementById(`res-${key}`);
    if (el) el.textContent = formatNumber(Math.floor(res.amount));
  });
}

setInterval(tickResources, 2000);

/* ══════════════════════════════════════════════════════
   NOTIFICATIONS BUTTON
══════════════════════════════════════════════════════ */
document.getElementById('notifBtn').addEventListener('click', () => {
  showToast('🔔  3 notifications — Feature in Phase 2');
});

/* ══════════════════════════════════════════════════════
   AUDIO ENGINE
   Music starts on page load (user already clicked "Enter the Tore")
   // future audio hook: zone-based track swapping via AudioManager
   // future audio hook: audio context for spatial effects
   // future save logic: persist user volume preference
══════════════════════════════════════════════════════ */
const AudioEngine = (() => {
  const el       = document.getElementById('bgMusic');
  const muteBtn  = document.getElementById('muteBtn');
  const volSlider = document.getElementById('volSlider');

  // Volume variable — change this to adjust default
  let VOLUME = 0.70;
  let isMuted = false;

  function fadeIn(target, durationMs) {
    if (!el) return;
    el.volume = 0;
    el.play().catch(() => {}); // graceful fail if browser still blocks
    const steps    = 60;
    const interval = durationMs / steps;
    const step     = target / steps;
    let v = 0;
    const timer = setInterval(() => {
      v = Math.min(target, v + step);
      el.volume = v;
      if (v >= target) clearInterval(timer);
    }, interval);
  }

  function setVolume(v) {
    VOLUME = v;
    if (!isMuted) el.volume = v;
  }

  function toggleMute() {
    isMuted = !isMuted;
    el.muted = isMuted;
    if (muteBtn) muteBtn.textContent = isMuted ? '🔇' : '🔊';
  }

  function init() {
    if (!el) return;
    el.volume = 0;
    // Fade in over 2.5s — user already consented via Enter the Tore button
    fadeIn(VOLUME, 2500);

    if (muteBtn) {
      muteBtn.addEventListener('click', toggleMute);
    }
    if (volSlider) {
      volSlider.addEventListener('input', () => {
        const v = parseFloat(volSlider.value) / 100;
        setVolume(v);
        if (v === 0) { el.muted = true; if (muteBtn) muteBtn.textContent = '🔇'; isMuted = true; }
        else if (isMuted) { el.muted = false; if (muteBtn) muteBtn.textContent = '🔊'; isMuted = false; }
      });
    }
  }

  return { init, fadeIn, setVolume, toggleMute };
})();

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
function init() {
  renderBuildings();
  AudioEngine.init();
  // future save logic: load persisted state here
  // future backend hook: fetch player data from API here
  console.log('[JAGLOTL] Tore Home Screen — Phase 1 loaded');
}

init();
