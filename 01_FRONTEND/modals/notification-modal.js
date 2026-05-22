/**
 * modals/notification-modal.js
 * JAGLOTL-KINGDOM — Notification Modal
 *
 * Shows recent alerts: attacks, upgrades done, shield expiring, resource caps.
 *
 * // future backend hook: push notifications from server
 */

'use strict';

const NotificationModal = {
  _items: [
    { type: 'warning', msg: 'Shield expires in 12 hours.' },
    { type: 'info',    msg: 'Celestial Mine upgrade complete.' },
    { type: 'alert',   msg: 'Resource cap reached: Celestial Gold.' },
  ],

  open(overlayEl) {
    if (!overlayEl) return;
    overlayEl.innerHTML = `
      <div class="notif-modal">
        <h2>Notifications</h2>
        ${this._items.map(n => `
          <div class="notif-item notif-item--${n.type}">${n.msg}</div>
        `).join('')}
      </div>
    `;
    overlayEl.style.display = 'flex';
  },

  close(overlayEl) {
    if (overlayEl) overlayEl.style.display = 'none';
  }
};

export default NotificationModal;
