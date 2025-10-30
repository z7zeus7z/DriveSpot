const express = require('express');
const router =express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {addCar} = require('../Controllers/carController');
const { getCars } = require('../Controllers/carController');
const { deleteCar } = require('../Controllers/carController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads/cars';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });


router.post('/', upload.array('images', 10), addCar);
router.get('/', getCars);
router.delete('/:id', deleteCar);

module.exports = router;