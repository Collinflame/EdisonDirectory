var express = require('express');
var router = express.Router();
const teacherController = require('../controllers/teacherController');
const courseController = require("../controllers/courseController");

/* GET home page. */
router.get('/', (req, res) => {
    res.redirect(301, '/teachers');
});
router.get('/courses/profile/:id', courseController.viewProfile)
router.get('/courses', courseController.viewAll);
router.get('/teachers', teacherController.viewAll);
router.get('/map', teacherController.viewMap);
module.exports = router;
