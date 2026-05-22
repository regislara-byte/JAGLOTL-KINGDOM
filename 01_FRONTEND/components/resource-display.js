/**
 * components/resource-display.js
 * JAGLOTL-KINGDOM — Resource Display Component
 *
 * Reusable component for displaying a resource with icon, amount, and fill bar.
 *
 * Usage:
 *   ResourceDisplay.create({ label, icon, color, amount, max })
 *   Returns an HTMLElement.
 */

'use strict';

const ResourceDisplay = {
  create({ label, icon, color, amount, max }) {
    const pct = Math.min(100, (amount / max) * 100).toFixed(1);
    const el = document.createElement('div');
    el.className = 'resource-item';
    el.innerHTML = `
      <span class="resource-item__icon" style="color:${color}">${icon}</span>
      <div class="resource-item__info">
        <span class="resource-item__label">${label}</span>
        <span class="resource-item__amount">${amount.toLocaleString()}</span>
        <div class="resource-item__bar">
          <div class="resource-item__bar-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </div>
    `;
    return el;
  }
};

export default ResourceDisplay;
