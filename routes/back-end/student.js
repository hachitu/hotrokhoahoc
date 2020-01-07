var express 	= require('express');
var connection 	= require('../../config/database');
var router 		= express.Router();

//Check auth account
const { ensureAuthenticated } = require('../../config/auth');

//Export File Excel
const excel = require('node-excel-export');

// Load model
var student = require("../../models/student");
var user 	= require("../../models/user");
var point 	= require("../../models/point");
var detailclassmodule 	= require("../../models/detailclassmodule");

//GET Student
router.get('/', ensureAuthenticated, function(req, res, next) {
	if(req.user.decentralization==1){
		student.GetAll(function(result){
			res.render('backend-view/student', {
				tittle: 'Quản lý sinh viên',
				pageheader: 'Quản lý sinh viên',
				layout: 'layout-backend/layout-table',
				name: req.user.username,
				student: result
			});
		});
	}else{
		req.logout();
		req.flash('success_msg', 'You have no rights!');
		res.redirect('/admin');
	}
});

// ADD SINH VIÊN
router.post('/add', ensureAuthenticated , (req, res) => {

	const { username, password, Avatar, StudentCode, NameStudent, Description, BirthDay, Sex, Email, PhoneNumber, Address } = req.body;

	student.Get_ID_Student(StudentCode,function(err,result){

  	//CHECK MÃ SINH VIÊN
  	if (result !='' ) {
  		req.flash('error_msg', 'Mã sinh viên đã tồn tại !');
  		res.redirect('/student')
  	}else{
  		//CHECK TÊN TÀI KHOẢN
  		user.getAccountByUsername(username,function(err,result){
  			if (result != '' ) {
  				req.flash('error_msg', 'Tên tài khoản đã tồn tại !');
  				res.redirect('/student')
  			}else{
				// THÊM TÀI KHOẢN
				user.register(username,password,NameStudent,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,'3',function(err,result,id_account){
					//THÊM SINH VIÊN
					student.INSERT(id_account,StudentCode,Description,function(result100){
						req.flash('success_msg', 'Thêm mới thành công !');
						res.redirect('/student')
					});
				});
			}
		});
  	}
  });


});

//EDIT SINH VIÊN
router.post('/edit/:IDStudent', ensureAuthenticated, (req, res) => {

	const { username, password, StudentCode, NameStudent, Description, BirthDay, Sex, Email, PhoneNumber, Address } = req.body;

	const IDStudent = req.params.IDStudent;

	student.UPDATE_CLASS(IDStudent,Description,function(err,result){});

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

		student.UPDATE(NameStudent,ID_Account,BirthDay,PhoneNumber,Email,Address,Sex,function(err,result){
			if (!err){

			}
			else{
				console.log(err);
			}
		});

	});
	req.flash('success_msg', 'Sửa tài khoản thành công !!!');
	res.redirect('/student')

});

//DELETE SINH VIÊN
router.post('/delete/:IDStudent/:username', ensureAuthenticated, (req,res)=>{

	const IDStudent = req.params.IDStudent;
	const username = req.params.username;

	//LẤY MÃ TÀI KHOẢN
	user.getAccountByUsername(username,function(err,result){
		var ID_Account = result[0].id_account ;
		// DELETE ACCOUNT
		user.delete(ID_Account,function(err,result){
			req.flash('error_msg', 'Xóa tài khoản thành công !!!');
		});
	});

	student.DELETE(IDStudent,function(err,result){
		req.flash('error_msg', 'Xóa sinh viên !!!');
		res.redirect('/student')
	});

});


// IMPORT SINH VIÊN
router.post('/import', (req, res) => {
	const { param1 } = req.body;

	param1.forEach(function(row) {

  	//START: BỎ DÒNG ĐẦU
  	if (row[0]!="STT") {

	//ÁNH XẠ
	let StudentCode = row[1];
	let Avatar = "";
	let username = StudentCode;
	let password = StudentCode;
	let NameStudent = row[2];
	let Sex = row[3];
	let Email = row[4];
	let PhoneNumber = row[5];
	let Address = row[6];
	let current_datetime = new Date(row[7]);
	let BirthDay = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();

	// START
	student.Get_ID_Student(StudentCode,function(err,result){
	//SATRT: CHECK MÃ SINH VIÊN
	if (result !='' ) {
		console.log('Sinh viên này đã tồn tại : '+NameStudent);
	}else{
		// START: THÊM TÀI KHOẢN
		user.register(username,password,NameStudent,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,'3',function(result){
			if (result != 'undefined' ) {
				console.log('THÊM TÀI KHOẢN THÀNH CÔNG : '+username);
			}else{
				console.log('THÊM TÀI KHOẢN THẤT BẠI : '+username);
			}
		});
		// END: THÊM TÀI KHOẢN
		//LẤY MÃ TÀI KHOẢN
		user.getAccountByUsername(username,function(err,result){
			var ID_Account = result[0].id_account ;

		//START: THÊM SINH VIÊN
		student.INSERT(ID_Account,StudentCode,function(result){
			if (result != 'undefined' ) {
				console.log('Thêm sinh viên thành công : '+NameStudent);
			}else{
				console.log('Thêm sinh viên thất bại : '+NameStudent);
			}
		});
	});
		//END: THÊM SINH VIÊN
	}
	//END: CHECK MÃ SINH VIÊN
});
	// END
}
	//END: BỎ DÒNG ĐẦU
});
	res.redirect('/student');
});

// TEST
router.post('/import_point', (req, res) => {
	const { param1, ID_Subject } = req.body;

	param1.forEach(function(row) {

  	//START: BỎ DÒNG ĐẦU
  	if (row[0]!="STT") {

	//ÁNH XẠ
	let StudentCode = row[1];
	let NameStudent = row[2];
	let chuyencan = row[3];
	let giuaky = row[4];
	let cuoiky = row[5];

	// START
	student.Get_ID_Student(StudentCode,function(err,result){

		let ID_Student = result[0].ID_Student;

		console.log(ID_Student);


		// START: NHẬP ĐIỂM
		tongket10 = (chuyencan*0.1) + (giuaky*0.2) + (cuoiky*0.7);

	  //Điểm hệ 10 -> hệ 4:
	  if (8.5 <= tongket10 && tongket10 <= 10) {
	  	tongket4 = 4.0;
	  	chu = 'A';
	  	status = '1';
	  }else if(8.0 <= tongket10 && tongket10 <= 8.4) {
	  	tongket4 = 3.5;
	  	chu = 'B+';
	  	status = '1';
	  }else if(7.0 <= tongket10 && tongket10  <= 7.9) {
	  	tongket4 = 3.0;
	  	chu = 'B';
	  	status = '1';
	  }else if(6.5 <= tongket10 && tongket10  <= 6.9) {
	  	tongket4 = 2.5;
	  	chu = 'C+';
	  	status = '1';
	  }else if(5.5 <= tongket10 && tongket10  <= 6.4) {
	  	tongket4 = 2.0;
	  	chu = 'C';
	  	status = '1';
	  }else if(5.0 <= tongket10 && tongket10  <= 5.4) {
	  	tongket4 = 1.5;
	  	chu = 'D+';
	  	status = '1';
	  }else if(4.0 < tongket10 && tongket10  <= 4.9) {
	  	tongket4 = 1.0;
	  	chu = 'D';
	  	status = '1';
	  }else{
	  	tongket4 = 0.0;
	  	chu = 'F';
	  	status = '4';
	  }

	  point.IMPORT(ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,function(err,result){
	  	if (!err){
	  		req.flash('success_msg', 'UPDATE POINT!!!');
	  	}
	  	else{
	  		console.log(err);
	  	}
	  });
		// END: NHẬP ĐIỂM
	});
	// END
}
	//END: BỎ DÒNG ĐẦU
});
	res.redirect('trangchu');
});


//DELETE SINH VIÊN
router.get('/testExport/:ID_Classmodule', ensureAuthenticated, (req,res)=>{

	const ID_Classmodule = req.params.ID_Classmodule;
	var dataset = [];

	detailclassmodule.GetStudentInClass(ID_Classmodule,function(err,result){
		var dem=0;
		result.forEach(function(rows){
			student.Get_StudentCode(rows.ID_Student,function(err,result1){
				result1.forEach(function(rows){
					dem++;
					dataset.push({
						STT: dem,
						MSV: rows.StudentCode,
						NAME: rows.Name,
						DCC: 0,
						DGK: 0,
						DCK: 0,
					});
				});
			});
		});
	});

	const styles = {
		headerDark: {
			fill: {
				fgColor: {
					rgb: 'FF000000'
				}
			},
			font: {
				color: {
					rgb: 'FFFFFFFF'
				},
				sz: 14,
				bold: true,
				underline: true
			}
		},
		cellPink: {
			fill: {
				fgColor: {
					rgb: 'FFFFCCFF'
				}
			}
		},
		cellGreen: {
			fill: {
				fgColor: {
					rgb: 'FF00FF00'
				}
			}
		}
	};

	const specification = {
		STT: {
			displayName: 'STT',
			headerStyle: styles.headerDark,
			width: '3'
		},
		MSV: {
			displayName: 'Mã sinh viên',
			headerStyle: styles.headerDark,
			width: '20'
		},
		NAME: {
			displayName: 'Họ và tên',
			headerStyle: styles.headerDark,
			width: '30'
		},
		DCC: {
			displayName: 'Điểm CC',
			headerStyle: styles.headerDark,
			width: '10'
		},
		DGK: {
			displayName: 'Điểm giữa kỳ',
			headerStyle: styles.headerDark,
			width: '10'
		},
		DCK: {
			displayName: 'Điểm cuối kỳ',
			headerStyle: styles.headerDark,
			width: '10'
		}
	}

	setTimeout(function(){

		console.log(dataset);

		const exportt = excel.buildExport(
			[
			{
				name: 'DSSV',
				specification: specification,
				data: dataset
			}
			]
			);

		res.attachment('DSSV.xlsx');
		return res.send(exportt);

	}, 5000);

});

module.exports = router;
