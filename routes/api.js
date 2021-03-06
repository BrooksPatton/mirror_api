const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json(req.query));
router.post('/', (req, res) => res.json(req.body));

module.exports = router;