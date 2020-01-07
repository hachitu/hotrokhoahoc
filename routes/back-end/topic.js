var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

const { ensureAuthenticated } = require('../../config/auth');
let date = require('date-and-time');

// load models
var topic = require("../../models/topic");
var classmodule = require("../../models/classmodule");

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  if(req.user.decentralization==1){
    topic.GetAll(function(result){
		classmodule.GetAll(function(result1){
			res.render('backend-view/topic', { 
				tittle: 'Quản lý bài viết',
				pageheader: 'Quản lý bài viết',
				layout: 'layout-backend/layout-table',
				name: req.user.username,
				topic: result,
				classmodule: result1,
			});
		});
	});
  }else{
    req.logout();
    req.flash('success_msg', 'You have no rights!');
    res.redirect('/admin');
  }
});

// ADD BÀI VIẾT
router.post('/add', ensureAuthenticated , (req, res) => {

  const { Line, ID_Classmodule, Type, Title, Content } = req.body;

  let now = new Date();
  
  var Time = date.format(now, 'YYYY/MM/DD HH:mm:ss');

  var ID_Account = '1';

  topic.INSERT(ID_Classmodule,ID_Account,Time,Type,Title,Content,function(err,result){
  	if (!err){
		req.flash('success_msg', 'THÊM BÀI VIẾT THÀNH CÔNG !!!');
		res.redirect('/topic')
	}
	else{
		console.log(err);
		res.redirect('/topic')
	}
  });

}); 

//EDIT BÀI VIẾT
router.post('/edit/:ID_Topic', ensureAuthenticated, (req, res) => {

	const { Type, Title, Content } = req.body;

	const ID_Topic = req.params.ID_Topic;

	let now = new Date();
  
  	var TimeEdit = date.format(now, 'YYYY/MM/DD HH:mm:ss');

	topic.UPDATE(ID_Topic,TimeEdit,Type,Title,Content,function(err,result){
	  	if (!err){
			Success(result);
			req.flash('success_msg', 'SỬA BÀI VIẾT THÀNH CÔNG !!!');
			res.redirect('/topic')
		}
		else{
			console.log(err);
			res.redirect('/topic')
		}
  	});

});

//DELETE BÀI VIẾT
router.post('/delete/:ID_Topic', ensureAuthenticated, (req,res)=>{

	const ID_Topic = req.params.ID_Topic;

	topic.DELETE(ID_Topic,function(err,result){
		req.flash('error_msg', 'Delete bài viết !!!');
		res.redirect('/topic')
	});

});

module.exports = router;
