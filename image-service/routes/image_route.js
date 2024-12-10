const express = require('express');
const {get_image_by_id} = require('../controllers/image_controller');
const router = express.Router();

router.get('/image/:id', get_image_by_id);

module.exports = router;
