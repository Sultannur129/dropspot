// generateSeed.js
const crypto = require('crypto');

const remote = process.argv[2]; // Git remote URL
const firstCommitEpoch = process.argv[3]; // İlk commit epoch
const startTime = process.argv[4]; // Projeye başlama zamanı YYYYMMDDHHmm

const raw = `${remote}|${firstCommitEpoch}|${startTime}`;
const hash = crypto.createHash('sha256').update(raw).digest('hex').substring(0, 12);

console.log('Seed:', hash);
