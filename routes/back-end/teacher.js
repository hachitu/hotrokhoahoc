var express = require('express');
var connection = require('../../config/database');
var router = express.Router();

const { ensureAuthenticated } = require('../../config/auth');

//Load models
var teacher = require("../../models/teacher");
var user = require("../../models/user");


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	if(req.user.decentralization==1){
		teacher.GetAll(function(result){
			res.render('backend-view/teacher', {
				tittle: 'Quản lý giảng viên',
				pageheader: 'Quản lý giảng viên',
				layout: 'layout-backend/layout-table',
				name: req.user.username,
				teacher: result
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

	const { username, password, Avatar, TeacherCode, NameTeacher, BirthDay, Sex, Email, PhoneNumber } = req.body;

	teacher.FindTeacherCode(TeacherCode,function(err,result){

  	//CHECK MÃ GIẢNG VIÊN
  	if (result !='' ) {
  		req.flash('error_msg', 'Mã giảng viên đã tồn tại !');
  		res.redirect('/teacher')
  	}else{
  		//CHECK TÊN TÀI KHOẢN
  		user.getAccountByUsername(username,function(err,result){
  			if (result != '' ) {
  				req.flash('error_msg', 'Tên tài khoản đã tồn tại !');
  				res.redirect('/teacher')
  			}else{
				// THÊM TÀI KHOẢN
				user.register(username,password,NameTeacher,Avatar,BirthDay,PhoneNumber,Email,"Address",Sex,'2',function(err,result,id_account){
					console.log(id_account);
					//THÊM GIẢNG VIÊN
					teacher.INSERT(id_account,TeacherCode,function(result){
						req.flash('success_msg', 'Thêm mới giảng viên thành công !');
						res.redirect('/teacher')
					});
				});
			}
		});
  	}
  });
});

//EDIT
router.post('/edit/:ID_Teacher', ensureAuthenticated, (req, res) => {

	const { username, password, TeacherCode, NameTeacher, BirthDay, Sex, Email, PhoneNumber } = req.body;
	const ID_Teacher = req.params.ID_Teacher;

	//LẤY MÃ TÀI KHOẢN
	user.getAccountByUsername(username,function(err,result){
		var ID_Account = result[0].id_account ;

		//SỬA ACCOUNT
		user.update(ID_Account,username,password,function(err,result){
			if (!err){
			}
			else{
				console.log(err);
			}
		});

		//SỬA TEACHER
		teacher.UPDATE(ID_Account, NameTeacher, BirthDay, PhoneNumber, Email, Sex, function(err,result){
			if (!err){
			}
			else{
				console.log(err);
			}
		});
	});

	req.flash('success_msg', 'Sửa thành công  !!!');
	res.redirect('/teacher')
});

//DELETE
router.post('/delete/:ID_Teacher/:username', ensureAuthenticated, (req,res)=>{

	const ID_Teacher = req.params.ID_Teacher;
	const username = req.params.username;

	//LẤY MÃ TÀI KHOẢN
	user.getAccountByUsername(username,function(err,result){
		var ID_Account = result[0].id_account ;

		// DELETE ACCOUNT
		user.delete(ID_Account,function(err,result){
			req.flash('error_msg', 'Delete ACCOUNT !!!');
		});
	});

	teacher.DELETE(ID_Teacher,function(err,result){
		req.flash('error_msg', 'Delete giảng viên !!!');
		res.redirect('/teacher')
	});

});

// IMPORT GIẢNG VIÊN
router.post('/import', (req, res) => {
	const { param1 } = req.body;

	param1.forEach(function(row) {

  	//START: BỎ DÒNG ĐẦU
  	if (row[0]!="STT") {

	//ÁNH XẠ
	let TeacherCode = row[1];
	let Avatar = "";
	let username = TeacherCode;
	let password = TeacherCode;
	let NameTeacher = row[2];
	let Sex = row[3];
	let Email = row[4];
	let PhoneNumber = row[5];
	let Address = row[6];
	let current_datetime = new Date(row[7]);
	let BirthDay = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();

	// START
	teacher.FindTeacherCode(TeacherCode,function(err,result){

  	//CHECK MÃ GIẢNG VIÊN
  	if (result !='' ) {
  		console.log('Giảng viên đã tồn tại : '+NameTeacher);
  	}else{
		// THÊM TÀI KHOẢN
		user.register(username,password,NameTeacher,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,'2',function(result){
			if (result != 'undefined' ) {
				console.log('THÊM TÀI KHOẢN THÀNH CÔNG : '+username);
			}else{
				console.log('THÊM TÀI KHOẢN THẤT BẠI : '+username);
			}
		});

		//LẤY MÃ TÀI KHOẢN
		user.getAccountByUsername(username,function(err,result){
			var ID_Account = result[0].id_account ;

			//THÊM GIẢNG VIÊN
			teacher.INSERT(ID_Account,TeacherCode,function(result){
				if (result != 'undefined' ) {
					console.log('Thêm giảng viên thành công : '+NameTeacher);
				}else{
					console.log('Thêm giảng viên thất bại : '+NameTeacher);
				}
			});
		});
	}
});
	// END
}
	//END: BỎ DÒNG ĐẦU
});
	res.redirect('/teacher');
});

module.exports = router;
