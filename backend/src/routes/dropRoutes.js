const express = require('express');
const router = express.Router();
const { getDrops, joinWaitlist, leaveWaitlist, claimDrop } = require('../controllers/dropController');

router.get('/', getDrops);                // Aktif drop listesi
router.post('/:id/join', joinWaitlist);   // Waitlist’e katıl
router.post('/:id/leave', leaveWaitlist); // Waitlist’ten ayrıl
router.post('/:id/claim', claimDrop);     // Claim penceresi açıldığında hak talebi

module.exports = router;
