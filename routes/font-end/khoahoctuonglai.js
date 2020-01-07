const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

let date = require('date-and-time');

const { ensureAuthenticated } = require('../../config/auth_fontend');

// Load model
const Point = require('../../models/point');
const Student = require('../../models/student');
const DetailClassmodule = require('../../models/DetailClassmodule');

// GET Login
router.get('/', ensureAuthenticated, (req, res) => {

    ID_Student = req.user[0].ID_Student;
    Level = req.user[0].Level;

    setInterval(function(){
         Point.AutoLevelUp(ID_Student,Level);
    }, 3000);

    if (ID_Student==undefined) {
      ID_Teacher = req.user[0].ID_Teacher;
      DetailClassmodule.ShowClassTeacher(2,ID_Teacher,function(err,listclass){
		  DetailClassmodule.GetAlldetailclassmodule(function(listdetailclassmodule){
        console.log(listdetailclassmodule);
				  res.render('fontend-view/khoahoctuonglai', {
					tittle: 'Khóa học hiện tại - TruongThiHaTrang',
					layout: 'layout-fontend/layout-khoahoc',
					user: req.user,
					listclass: listclass,
					listdetailclassmodule: listdetailclassmodule
				  });
		    });
      });
    }else{
      Point.ListClass(ID_Student,Level,function(err,listclass){
			DetailClassmodule.GetAlldetailclassmodule(function(listdetailclassmodule){
				res.render('fontend-view/khoahoctuonglai', {
				  tittle: 'Khóa học tương lai - TruongThiHaTrang',
				  layout: 'layout-fontend/layout-khoahoc',
				  user: req.user,
				  listclass: listclass,
				  listdetailclassmodule: listdetailclassmodule,
				});
			});
      });
    }
});

// Đăng ký lớp học
router.post('/dangky', ensureAuthenticated, (req, res) => {

  let now = new Date();

  var TimeRegis = date.format(now, 'YYYY/MM/DD');

  const { ID_Classmodule,ID_Subject } = req.body;

  ID_Student = req.user[0].ID_Student;

  DetailClassmodule.Regis(ID_Student, ID_Subject, ID_Classmodule, TimeRegis, function(result){
    req.flash('success_msg', 'Đăng ký lớp học thành công !');
  });

  res.redirect('/trangchu');
});

module.exports = router;
