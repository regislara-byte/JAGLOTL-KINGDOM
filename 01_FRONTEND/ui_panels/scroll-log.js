/**
 * ui_panels/scroll-log.js
 * JAGLOTL-KINGDOM — Scroll Log Panel
 *
 * Displays recent kingdom events: battles, upgrades, logins, resource gains.
 *
 * // future backend hook: fetch event log from /api/player/events
 * // future save logic: cache log locally
 */

'use strict';

const ScrollLog = {
  _entries: [
    { time: '2 min ago',  type: 'upgrade',  msg: 'Celestial Mine upgraded to Level 5.' },
    { time: '14 min ago', type: 'resource', msg: 'Gold storage full — Celestial Mine paused.' },
    { time: '1h ago',     type: 'raid',     msg: 'Scout detected movement 320km north.' },
    { time: '3h ago',     type: 'quest',    msg: 'Quest "First Blood" completed. +500 JWAR.' },
  ],

  render(containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = this._entries.map(e => `
      <div class="scroll-entry scroll-entry--${e.type}">
        <span class="scroll-entry__time">${e.time}</span>
        <span class="scroll-entry__msg">${e.msg}</span>
      </div>
    `).join('');
  },

  addEntry(type, msg) {
    this._entries.unshift({ time: 'Just now', type, msg });
    if (this._entries.length > 50) this._entries.pop();
    // future save logic: persist to localStorage
  }
};

export default ScrollLog;
