var express = require('express');
var connection = require('../../config/database');
var router = express.Router();

const { ensureAuthenticated } = require('../../config/auth');

// load models
var point = require("../../models/point");
var student = require("../../models/student");
var subject = require("../../models/subject");
var user = require("../../models/user");


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  if(req.user.decentralization==1){
    point.GetAll(function(datapoint){
		student.GetAll(function(datastudent){
			subject.GetAll(function(datasubject){
				console.log(student);
				res.render('backend-view/point', {
					tittle: 'Quản lý điểm',
					pageheader: 'Quản lý điểm',
					layout: 'layout-backend/layout-table',
					name: req.user.username,
					point: datapoint,
					student: datastudent,
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

// ADD điểm
router.post('/add', ensureAuthenticated , (req, res) => {

  const { ID_Student,ID_Subject,chuyencan,giuaky,cuoiky } = req.body;

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

  	//THÊM điểm
	point.INSERT(ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,function(result){
		if (result != 'undefined' ) {
	  		req.flash('success_msg', 'Thêm điểm thành công !');
	  			res.redirect('/point')
	  	}else{
	  		req.flash('error_msg', 'Thêm điểm thất bại !');
	  		  	res.redirect('/point')
	  	}
	});

});


//EDIT điểm
router.post('/edit/:ID_Point', ensureAuthenticated, (req, res) => {

	const { ID_Student,ID_Subject,chuyencan,giuaky,cuoiky } = req.body;

	const ID_Point = req.params.ID_Point;

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

	point.UPDATE(ID_Point,ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,function(err,result){
		if (!err){

		}
		else{
			console.log(err);
		}
	});

  req.flash('success_msg', 'Sửa thành công !!!');
	res.redirect('/point')

});

//DELETE điểm
router.post('/delete/:IDpoint', ensureAuthenticated, (req,res)=>{

	const IDpoint = req.params.IDpoint;

	point.DELETE(IDpoint,function(err,result){
		req.flash('error_msg', 'Delete điểm !!!');
		res.redirect('/point')
	});

});

module.exports = router;
