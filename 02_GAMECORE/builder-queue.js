/**
 * 02_GAMECORE/builder-queue.js
 * JAGLOTL-KINGDOM — Builder Queue
 *
 * Manages construction slots, timers, and upgrade queue.
 *
 * // future builder queue: implement full timer logic
 * // future backend hook: sync queue state with server
 * // future save logic: persist active builds across sessions
 */

'use strict';

const BuilderQueue = (() => {
  const _slots = [
    { id: 1, busy: true,  buildingId: 'builder_hut', finishAt: Date.now() + 86400000 },
    { id: 2, busy: false, buildingId: null,           finishAt: null },
    { id: 3, busy: false, buildingId: null,           finishAt: null },
  ];

  function getAvailable() {
    return _slots.filter(s => !s.busy);
  }

  function queue(buildingId, durationSec) {
    const slot = _slots.find(s => !s.busy);
    if (!slot) return { ok: false, msg: 'No builders available' };
    slot.busy = true;
    slot.buildingId = buildingId;
    slot.finishAt = Date.now() + durationSec * 1000;
    // future builder queue: start countdown interval
    return { ok: true, slot: slot.id };
  }

  function getTimeRemaining(slotId) {
    const slot = _slots.find(s => s.id === slotId);
    if (!slot || !slot.finishAt) return 0;
    return Math.max(0, Math.floor((slot.finishAt - Date.now()) / 1000));
  }

  function getAll() { return _slots; }

  return { getAvailable, queue, getTimeRemaining, getAll };
})();

export default BuilderQueue;
