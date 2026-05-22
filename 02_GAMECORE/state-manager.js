/**
 * 02_GAMECORE/state-manager.js
 * JAGLOTL-KINGDOM — Game State Manager
 *
 * Central state management for Phase 1.
 * All game state flows through here.
 *
 * // future save logic: add persistence layer (localStorage or server sync)
 * // future backend hook: replace local state with API-backed state
 * // future battle system: add legion / army state here
 */

'use strict';

const StateManager = (() => {

  let _state = null;

  function init(initialState) {
    _state = JSON.parse(JSON.stringify(initialState)); // deep clone
    console.log('[StateManager] Initialized with state:', Object.keys(_state));
  }

  function get(path) {
    if (!path) return _state;
    return path.split('.').reduce((obj, key) => obj?.[key], _state);
  }

  function set(path, value) {
    const keys = path.split('.');
    const last = keys.pop();
    const target = keys.reduce((obj, key) => obj?.[key], _state);
    if (target) {
      target[last] = value;
      // future save logic: trigger autosave on state change
    }
  }

  function dispatch(action, payload) {
    console.log(`[StateManager] Action: ${action}`, payload);
    switch (action) {
      case 'UPGRADE_BUILDING':
        // future backend hook: POST /api/buildings/upgrade
        // future builder queue: deduct builder, start timer
        break;
      case 'COLLECT_RESOURCE':
        // future backend hook: POST /api/resources/collect
        break;
      case 'PLACE_BUILDING':
        // future builder queue: check builder availability
        break;
      default:
        console.warn(`[StateManager] Unknown action: ${action}`);
    }
  }

  return { init, get, set, dispatch };
})();

export default StateManager;
