/**
 * ui_panels/quest-board.js
 * JAGLOTL-KINGDOM — Quest Board Panel
 *
 * Displays active quests, progress, and rewards.
 *
 * // future backend hook: fetch quests from /api/quests
 * // future battle system: quests tied to legion actions
 */

'use strict';

const QuestBoard = {
  _quests: [
    {
      id: 'q001', title: 'The First Stone',
      desc: 'Upgrade any building to Level 2.',
      progress: 1, goal: 1, done: true,
      reward: { celestialGold: 5000, xp: 200 }
    },
    {
      id: 'q002', title: 'Void Touched',
      desc: 'Gather 1,000 Void Essence.',
      progress: 3450, goal: 1000, done: true,
      reward: { voidEssence: 500, xp: 300 }
    },
    {
      id: 'q003', title: 'Legion Rising',
      desc: 'Train 10 Runeborn Warriors.',
      progress: 0, goal: 10, done: false,
      reward: { jwar: 100, xp: 500 }
    },
    {
      id: 'q004', title: 'Rune Keeper',
      desc: 'Save your first Skilljar preset.',
      progress: 0, goal: 1, done: false,
      reward: { celestialGold: 8000, xp: 400 }
    },
  ],

  render(containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = this._quests.map(q => `
      <div class="quest-item ${q.done ? 'quest-item--done' : ''}">
        <div class="quest-item__title">${q.title} ${q.done ? '✓' : ''}</div>
        <div class="quest-item__desc">${q.desc}</div>
        <div class="quest-item__progress">
          <div class="quest-progress-bar" style="width:${Math.min(100,(q.progress/q.goal)*100).toFixed(0)}%"></div>
        </div>
      </div>
    `).join('');
  }
};

export default QuestBoard;
