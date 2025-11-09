// utils/priority.js
/*const crypto = require('crypto');

const seed = process.env.DROP_SEED; // .env'den alıyoruz

function getPriorityScore(signupLatencyMs, accountAgeDays, rapidActions) {
  if (!seed) throw new Error('Seed tanımlı değil');

  const A = 7 + (parseInt(seed.slice(0, 2), 16) % 5);
  const B = 13 + (parseInt(seed.slice(2, 4), 16) % 7);
  const C = 3 + (parseInt(seed.slice(4, 6), 16) % 3);

  return signupLatencyMs % A + accountAgeDays % B - rapidActions % C;
}

module.exports = { getPriorityScore };*/


// utils/priority.js
const crypto = require('crypto');

/**
 * Generate a unique seed based on repository and project start info
 * @param {string} remoteUrl Git remote URL
 * @param {string|number} firstCommitEpoch First commit timestamp
 * @param {string} startTime Project start time YYYYMMDDHHmm
 * @returns {string} 12-character seed
 */
function generateSeed(remoteUrl, firstCommitEpoch, startTime) {
  const raw = `${remoteUrl}|${firstCommitEpoch}|${startTime}`;
  const hash = crypto.createHash('sha256').update(raw).digest('hex');
  return hash.substring(0, 12);
}

/**
 * Calculate priority score for waitlist ordering
 * @param {string} seed 12-character seed
 * @param {number} signupLatencyMs Signup latency in milliseconds
 * @param {number} accountAgeDays User account age in days
 * @param {number} rapidActions Number of rapid actions performed
 * @returns {number} priority score
 */
function getPriorityScore(seed, signupLatencyMs, accountAgeDays, rapidActions) {
  if (!seed) throw new Error('Seed tanımlı değil');

  const A = 7 + (parseInt(seed.slice(0, 2), 16) % 5);
  const B = 13 + (parseInt(seed.slice(2, 4), 16) % 7);
  const C = 3 + (parseInt(seed.slice(4, 6), 16) % 3);

  return signupLatencyMs % A + accountAgeDays % B - rapidActions % C;
}

module.exports = { generateSeed, getPriorityScore };



