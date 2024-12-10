const images = require('../models/image_model');

const get_image_by_id = (req, res) => {
    const image_id = parseInt(req.params.id);
    const image = images.find(img => img.id == image_id);

    if (image) {
        res.json(image);
    } else {
        res.status(404).json({error: 'Image not found'});
    }
}

module.exports = {get_image_by_id};