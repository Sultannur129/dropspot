const express = require('express');
const router = express.Router();
const { adminAuth } = require('../middleware/adminAuth');
const { createDrop, updateDrop, deleteDrop, listDrops } = require('../controllers/adminController');

router.post('/drops', adminAuth, createDrop);
router.put('/drops/:id', adminAuth, updateDrop);
router.delete('/drops/:id', adminAuth, deleteDrop);
router.get('/drops', adminAuth, listDrops);

module.exports = router;
