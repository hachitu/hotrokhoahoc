const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

const { ensureAuthenticated } = require('../../config/auth_fontend');

// Load model
const Student = require('../../models/student');
const DetailClassmodule = require('../../models/detailclassmodule');
// GET Login
router.get('/', ensureAuthenticated, (req, res) => {

    ID_Student = req.user[0].ID_Student;

    if (ID_Student==undefined) {
		ID_Teacher = req.user[0].ID_Teacher;
		DetailClassmodule.ShowClassTeacher(0,ID_Teacher,function(err,listclass){
		// muốn gửi thêm 1 list data
			DetailClassmodule.GetAlldetailclassmodule(function(listdetailclassmodule){
				res.render('fontend-view/khoahochientai', {
				  tittle: 'Khóa học hiện tại - TruongThiHaTrang',
				  layout: 'layout-fontend/layout-khoahoc',
				  user: req.user,
				  listclass: listclass,
				  listdetailclassmodule: listdetailclassmodule,
				});
			});
	    });
    }else{
		DetailClassmodule.ShowClass(0,ID_Student,function(err,listclass){
			DetailClassmodule.GetAlldetailclassmodule(function(listdetailclassmodule){
				res.render('fontend-view/khoahochientai', {
				  tittle: 'Khóa học hiện tại - TruongThiHaTrang',
				  layout: 'layout-fontend/layout-khoahoc',
				  user: req.user,
				  listclass: listclass,
				  listdetailclassmodule: listdetailclassmodule,
				});
			});
		});
    }
});

module.exports = router;
