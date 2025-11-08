const express = require('express');
const router = express.Router();
const { getDrops, joinWaitlist, leaveWaitlist, claimDrop } = require('../controllers/dropController');

router.get('/', getDrops);
router.post('/:id/join', joinWaitlist);
router.post('/:id/leave', leaveWaitlist);
router.post('/:id/claim', claimDrop);

module.exports = router;
