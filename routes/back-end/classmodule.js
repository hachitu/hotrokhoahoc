var express = require('express');
var connection = require('../../config/database');
var router = express.Router();

const { ensureAuthenticated } = require('../../config/auth');

// Load models
var classmodule = require("../../models/classmodule");
var teacher = require("../../models/teacher");
var subject = require("../../models/subject");
var user = require("../../models/user");


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  if(req.user.decentralization==1){
    classmodule.GetAll(function(dataclass){
		teacher.GetAll(function(datateacher){
			subject.GetAll(function(datasubject){
				res.render('backend-view/classmodule', {
					tittle: 'Quản lý lớp học',
					pageheader: 'Quản lý lớp học',
					layout: 'layout-backend/layout-table',
					name: req.user.username,
					classmodule: dataclass,
					teacher: datateacher,
					subject: datasubject
				});
			});
		});
	});
  }else{
    req.logout();
    req.flash('success_msg', 'You have no rights!');
    res.redirect('/admin');
  }
});

// ADD
router.post('/add', ensureAuthenticated , (req, res) => {

  const { NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent } = req.body;

  classmodule.Get_Name(NameClass,function(err,result){

  	//CHECK TÊN LỚP HỌC

	if (result !='' ) {
  		req.flash('error_msg', 'Tên lớp học đã tồn tại !');
  			res.redirect('/classmodule')
  	}else{

		//THÊM CLASS
		classmodule.INSERT(NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent,function(result){
			if (result != 'undefined' ) {
		  		req.flash('success_msg', 'Thêm lớp học thành công !');
		  			res.redirect('/classmodule')
		  	}else{
		  		req.flash('error_msg', 'Thêm lớp học thất bại !');
		  		  	res.redirect('/classmodule')
		  	}
		  });
  	}
  });
});

//EDIT HỌC PHẦN
router.post('/edit/:ID_Classmodule', ensureAuthenticated, (req, res) => {

	const { NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent } = req.body;

	const ID_Classmodule = req.params.ID_Classmodule;

	classmodule.UPDATE(ID_Classmodule,NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent,function(err,result){
		if (!err){

		}
		else{
			console.log(err);
		}
	});
  req.flash('success_msg', 'Sửa thành công !!!');
	res.redirect('/classmodule')

});

//DELETE HỌC PHẦN
router.post('/delete/:ID_Classmodule', ensureAuthenticated, (req,res)=>{

	const ID_Classmodule = req.params.ID_Classmodule;

	classmodule.DELETE(ID_Classmodule,function(err,result){
		req.flash('error_msg', 'DELETE CLASS !!!');
		res.redirect('/classmodule')
	});

});

// IMPORT LỚP HỌC
router.post('/import', (req, res) => {
  const { param1 } = req.body;

  param1.forEach(function(row) {

  	//START: BỎ DÒNG ĐẦU
	if (row[0]!="STT") {

	//ÁNH XẠ
	let NameClass = row[1];
	let NameTeacher = row[2];
	let NameSubject = row[3];
	let Description = row[4];
	let CountStudent = row[7];

	let start_time = new Date(row[5]);
	let TimeStart = start_time.getFullYear() + "-" + (start_time.getMonth() + 1) + "-" + start_time.getDate();

	let end_time = new Date(row[6]);
	let TimeEnd = end_time.getFullYear() + "-" + (end_time.getMonth() + 1) + "-" + end_time.getDate();

	// START
	classmodule.Get_Name(NameClass,function(err,result){
	  	//CHECK TÊN LỚP HỌC
		if (result !='' ) {
	  		console.log('Lớp học đã tồn tại : '+NameClass);
	  	}else{
  			teacher.Get_Name(NameTeacher,function(err,result){
				var ID_Teacher = result[0].ID_Teacher;
				subject.Get_Name(NameSubject,function(err,result){
					var ID_Subject = result[0].ID_Subject;
					//THÊM CLASS
					classmodule.INSERT(NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent,function(result){
						if (result != 'undefined' ) {
					  		console.log('Thêm lớp học thành công : '+NameClass);
					  	}else{
					  		console.log('Thêm lớp học thất bại : '+NameClass);
					  	}
					});
				});
			});
	  	}
	  });
	// END
	}
	//END: BỎ DÒNG ĐẦU
  });
     res.redirect('/classmodule')
});


module.exports = router;
