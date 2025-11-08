const express = require('express');
const router = express.Router();
const { createDrop, updateDrop, deleteDrop, listDrops } = require('../controllers/adminController');

router.post('/drops', createDrop);
router.put('/drops/:id', updateDrop);
router.delete('/drops/:id', deleteDrop);
router.get('/drops', listDrops);

module.exports = router;
