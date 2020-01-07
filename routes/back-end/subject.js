var express = require('express');
var connection = require('../../config/database');
var router = express.Router();

const { ensureAuthenticated } = require('../../config/auth');

//UPLOAD FILE
const multer = require('multer');

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  },
  url: function (req, file, cb) {
    cb(null, 'uploads/img' + file.filename)
  },
})

var upload = multer({ storage: storage })

//Load models
var subject = require("../../models/subject");
var user = require("../../models/user");

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  if(req.user.decentralization==1){
    subject.GetAll(function(result){
      res.render('backend-view/subject', {
        tittle: 'Quản lý học phần',
        pageheader: 'Quản lý học phần',
        layout: 'layout-backend/layout-table',
        name: req.user.username,
        subject: result
      });
    });
  }else{
    req.logout();
    req.flash('success_msg', 'You have no rights!');
    res.redirect('/admin');
  }
});

// ADD
router.post('/add', upload.single('Avatar'), ensureAuthenticated , (req, res) => {

  const { NameSubject,Number,Description,Level } = req.body;

  const file = req.file;
  var Avatar = file.filename;

  subject.Get_Name(NameSubject,function(err,result){

  	//CHECK TÊN HỌC PHẦN

	if (result !='' ) {
  		// req.flash('error_msg', 'Tên học phần đã tồn tại !');
  		// 	res.redirect('/subject')
  	}else{

		//THÊM học phần
		subject.INSERT(Avatar,NameSubject,Number,Description,Level,function(err,result){
			if (err) {
				console.log(err);
			} else {
				console.log(result);
			}

		});
  	}
  });
  req.flash('success_msg', 'Thêm học phần thành công !');
  res.redirect('/subject')
});

//EDIT
router.post('/edit/:IDsubject',upload.single('Avatar'), ensureAuthenticated, (req, res) => {

	const { AvatarOld,NameSubject,Number,Description,Level } = req.body;

	const file = req.file;

	  if (file == undefined) {
	    var Avatar = AvatarOld;
	  }else{
	    if (AvatarOld != "") {
	      // Assuming that 'path/file.txt' is a regular file.
	      fs.unlink('uploads/img/'+AvatarOld, (err) => {
	        if (err) throw err;
	        console.log(AvatarOld + ' was deleted');
	      });
	    }
	    var Avatar = file.filename;
	  }

	const IDsubject = req.params.IDsubject;

	subject.UPDATE(Avatar,IDsubject,NameSubject,Number,Description,Level,function(err,result){
		if (!err){
		}
		else{
			console.log(err);
		}
	});
  req.flash('success_msg', 'Sửa thành công !!!');
	res.redirect('/subject')

});

//DELETE
router.post('/delete/:IDsubject', ensureAuthenticated, (req,res)=>{

	const IDsubject = req.params.IDsubject;

	subject.DELETE(IDsubject,function(err,result){
		req.flash('error_msg', 'Delete học phần !!!');
		res.redirect('/subject')
	});

});

// IMPORT HỌC PHẦN
router.post('/import', (req, res) => {
  const { param1 } = req.body;

  param1.forEach(function(row) {

  	//START: BỎ DÒNG ĐẦU
	if (row[0]!="STT") {

	//ÁNH XẠ
	let NameSubject = row[1];
	let Number = row[2];
	let Level = row[3];
	let Description = row[4];

	// START
	subject.Get_Name(NameSubject,function(err,result){
  	//CHECK TÊN HỌC PHẦN
	if (result !='' ) {
		console.log('học phần đã tồn tại : '+NameSubject);
  	}else{
		//THÊM học phần
		subject.INSERT(NameSubject,Number,Description,Level,function(err,result){
			if (err) {
				console.log('Thêm học phần thất bại : '+NameSubject);
			} else {
				console.log('Thêm học phần thành công : '+NameSubject);
			}
		});
  	}
  	});
	// END
	}
	//END: BỎ DÒNG ĐẦU
  });
      res.redirect('/subject');
});

module.exports = router;
