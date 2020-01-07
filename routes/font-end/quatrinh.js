const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

const { ensureAuthenticated } = require('../../config/auth_fontend');

// Load model
const Point = require('../../models/point');

// Quá trình
router.get('/', ensureAuthenticated, (req, res) => {

    ID_Student = req.user[0].ID_Student;

    if (ID_Student==undefined) {

    }else{
    	Point.ListSubject(ID_Student,function(err,listsubject){
	      res.render('fontend-view/quatrinh-sv', {
	        tittle: 'Quá trình học tập - TruongThiHaTrang',
	        layout: 'layout-fontend/layout-khoahoc',
	        user: req.user,
	        subject: listsubject,
	      });
	    });
    }


});

module.exports = router;
