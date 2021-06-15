const express = require('express');
const CVController = require('../Controllers/cv.controller');



const router = express.Router();
router.route('/').post(CVController.createCV )
                 .get(CVController.getCVs )
router.route('/:id').delete(CVController.DeleteCV)
                 .patch(CVController.updateCV)
                 .get(CVController.getCV)
router.route('/user/:idUser').get(CVController.getCVByUser)

module.exports = router; 