const express = require('express');
const { createConsultation, getConsultations } = require('../controllers/consultationController');

const router = express.Router();

router.get('/admin', getConsultations);
router.post('/', createConsultation);

module.exports = router;
