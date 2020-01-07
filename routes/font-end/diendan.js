const express   = require('express');
const router    = express.Router();
const passport  = require('passport');
var path = require('path');

const { ensureAuthenticated } = require('../../config/auth_fontend');

let date = require('date-and-time');

// Load model
const topic = require('../../models/topic');
const comment = require('../../models/comment');
const classmodule = require('../../models/classmodule');
const detailclassmodule = require('../../models/detailclassmodule');
const student = require('../../models/student');
const file = require('../../models/file');

// GET Login
router.get('/', ensureAuthenticated, (req, res) => {

	ID_Student = req.user[0].ID_Student;

	res.render('fontend-view/diendan-3', {
		tittle: 'Diễn đàn học phần - Sinh viên',
		layout: 'layout-fontend/layout-diendan',
		user: req.user,
	});

});

// DANH SÁCH LỚP
router.get('/danhsachlop/:ID_Classmodule', ensureAuthenticated, (req, res) => {

	ID_Classmodule = req.params.ID_Classmodule;
		console.log(ID_Classmodule);
	detailclassmodule.GetStudentInClass1(ID_Classmodule,function(err,result){
		if (result=="") {
			res.render('fontend-view/danhsachlop', {
				tittle: 'Danh sách lớp',
				layout: 'layout-fontend/layout-danhsachlop',
				user: req.user,
				mess: "Lớp học chưa có sinh viên nào đăng ký",
			});
		}else{
			result.forEach(function(row){
				student.Get_Student1(row.ID_Student,function(err,result1){
					res.render('fontend-view/danhsachlop', {
						tittle: 'Danh sách lớp',
						layout: 'layout-fontend/layout-danhsachlop',
						user: req.user,
						students: result1,
						status: row.status,
						ID_Detail: row.ID_Detail,
					});
				});
			});
		}
	});
});

// DUYỆT SINH VIÊN
router.post('/duyet', ensureAuthenticated, (req, res) => {

  const { ID_Detail } = req.body;

  detailclassmodule.UpdateStatus(ID_Detail, function(result){
    req.flash('success_msg','Duyệt sinh viên thành công !');
  });

  res.redirect('/trangchu');

});

// DUYỆT SINH VIÊN
router.post('/huy', ensureAuthenticated, (req, res) => {

  const { ID_Detail } = req.body;

  detailclassmodule.DeleteDetail(ID_Detail, function(result){
    req.flash('success_msg','Hủy sinh viên thành công !');
  });

  res.redirect('/trangchu');

});

// THÊM BÀI VIẾT
router.get('/thembaiviet/:ID_Forum', ensureAuthenticated, (req, res) => {

	ID_Forum = req.params.ID_Forum;

	classmodule.Get_ID_Class(ID_Forum,function(err,result){
		NameClass = result[0]['NameClass'],
		NameSubject = result[0]['NameSubject'],
		NameTeacher = result[0]['Name'],
		ID_Classmodule = result[0]['ID_Classmodule'],

		res.render('fontend-view/diendan-3', {
			tittle: 'Thêm bài viết mới - '+NameSubject,
			layout: 'layout-fontend/layout-diendan-2',
			user: req.user,
			Tenlophoc: NameClass,
			Tenmonhoc: NameSubject,
			Giangvien: NameTeacher,
			ID_Classmodule: ID_Classmodule,
		});

	});
});


//UPLOAD FILE
const multer = require('multer');

// SET STORAGE
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/files')
	},
	filename: function (req, file, cb) {
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	},
	url: function (req, file, cb) {
		cb(null, 'uploads/files' + file.filename)
	},
})

var upload = multer({ storage: storage })

// ADD BÀI VIẾT
router.post('/add', upload.array('myFiles', 12), ensureAuthenticated , (req, res, next) => {

	const { ID_Classmodule, Type, Title, content } = req.body;

	const files = req.files;

	ID_Account = req.user[0].ID_Account;

	let now = new Date();

	var Time = date.format(now, 'YYYY/MM/DD HH:mm:ss');

	topic.INSERT(ID_Classmodule,ID_Account,Time,Type,Title,content,function(err,result,id_topic,id_cmt){
		if (!err){
			if (files!=undefined) {
				files.forEach(function(row){
					var name_file = row.originalname;
					var url_file = row.filename;
					file.INSERT(name_file,url_file,id_topic,id_cmt,function(err,result){
						// console.log(err);
						// console.log(result);
					});
				});
			}
			res.redirect('/diendan/'+ID_Classmodule+'')
		}
		else{
			console.log(err);
			res.redirect('/diendan/'+ID_Classmodule+'')
		}
	});
});

// ADD BÌNH LUẬN
router.post('/addcomment', upload.array('myFiles', 12), ensureAuthenticated , (req, res) => {

	const { ID_Classmodule, ID_Topic, content } = req.body;

	ID_Account = req.user[0].ID_Account;

	const files = req.files;

	let now = new Date();

	var Time = date.format(now, 'YYYY/MM/DD HH:mm:ss');

	comment.INSERT(ID_Topic, ID_Account, content, Time,function(err,result,id_cmt){
		if (!err){

			files.forEach(function(row){
				var name_file = row.originalname;
				var url_file = row.filename;
				file.INSERT(name_file,url_file,ID_Topic,id_cmt,function(err,result){
					// console.log(err);
					// console.log(result);
				});
			});

			console.log(result);
			res.redirect('/diendan/'+ID_Classmodule+'/'+ID_Topic+'')
		}
		else{
			console.log(err);
			res.redirect('/diendan/'+ID_Classmodule+'/'+ID_Topic+'')
		}
	});

});

//LOAD DIỄN ĐÀN
router.get('/:ID_Classmodule',ensureAuthenticated, (req,res) => {

	const ID_Classmodule = req.params.ID_Classmodule;

	classmodule.Get_ID_Class(ID_Classmodule,function(err,result){
		NameClass = result[0]['NameClass'],
		NameSubject = result[0]['NameSubject'],
		NameTeacher = result[0]['Name'],
		ID_Subject = result[0]['ID_Subject'],
		Status = result[0]['status_teacher']

		topic.Get_By_ID_ClassModule(ID_Classmodule,function(err,result){
			res.render('fontend-view/diendan-1', {
				tittle: 'Diễn đàn học phần : '+NameSubject,
				layout: 'layout-fontend/layout-diendan',
				user: req.user,
				ID_Forum: ID_Classmodule,
				Tenlophoc: NameClass,
				Tenmonhoc: NameSubject,
				Giangvien: NameTeacher,
				ID_Subject: ID_Subject,
				Status: Status,
				topic: result
			});
		});

	});

});

// LOAD BÀI VIẾT
router.get('/:ID_Classmodule/:ID_Topic',ensureAuthenticated, (req,res) => {

	const ID_Classmodule = req.params.ID_Classmodule;
	const ID_Topic = req.params.ID_Topic;

	classmodule.Get_ID_Class(ID_Classmodule,function(err,result){
		Status = result[0]['status_teacher'],
		comment.Get_By_ID_Topic(ID_Topic,function(err,result1){
			file.Get_By_ID_Topic(ID_Topic,function(err,result2){
				res.render('fontend-view/diendan-2', {
					tittle: 'Bài viết - '+result1[0]['Title'],
					layout: 'layout-fontend/layout-diendan-2',
					user: req.user,
					ID_Classmodule: ID_Classmodule,
					ID_Topic: ID_Topic,
					Status: Status,
					Tittle: result1[0]['Title'],
					Type: result1[0]['Type'],
					Name: result1[0]['username'],
					Time: result1[0]['Time'],
					comment: result1,
					file: result2
				});
			});
		});
	});
});


//Xóa bài viết
router.post('/delete/:ID_Topic', ensureAuthenticated, (req,res) => {

	const { ID_Classmodule } = req.body;

	const ID_Topic = req.params.ID_Topic;

	topic.DELETE(ID_Topic,function(err,result){
		if (!err){
			console.log(result);
			res.redirect('/diendan/'+ID_Classmodule+'')
		}
		else{
			console.log(err);
			res.redirect('/diendan/'+ID_Classmodule+'')
		}
	});

});

// ĐÓNG LỚP HỌC
router.post('/close', ensureAuthenticated, (req,res) => {

	const { ID_Classmodule } = req.body;

	detailclassmodule.CloseClass(ID_Classmodule,function(err,result){
		if (!err){
			console.log(result);
			res.redirect('/trangchu')
		}
		else{
			console.log(err);
			res.redirect('/trangchu')
		}
	});

});

module.exports = router;
