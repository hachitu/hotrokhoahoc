var express = require('express');
var router = express.Router();
var connection = require('../../config/database');

const { ensureAuthenticated } = require('../../config/auth');
let date = require('date-and-time');

// load models
var comment = require("../../models/comment");
var topic = require("../../models/topic");


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  if(req.user.decentralization==1){
    comment.GetAll(function(result){
		topic.GetAll(function(result1){
			res.render('backend-view/comment', { 
				tittle: 'Quản lý bình luận',
				pageheader: 'Quản lý bình luận',
				layout: 'layout-backend/layout-table',
				name: req.user.username,
				comment: result,
				topic: result1,
			});
		});
	});
  }else{
    req.logout();
    req.flash('success_msg', 'You have no rights!');
    res.redirect('/admin');
  }
});

// ADD BÌNH LUẬN
router.post('/add', ensureAuthenticated , (req, res) => {

	console.log(req.body);

  const { ID_Topic, Content } = req.body;

  var FK_ID_Topic = ID_Topic;

  let now = new Date();
  
  var Time = date.format(now, 'YYYY/MM/DD HH:mm:ss');

  var ID_Account = '1';

  comment.INSERT(FK_ID_Topic,ID_Account,Content,Time,function(err,result){
  	if (!err){
		req.flash('success_msg', 'THÊM BÌNH LUẬN THÀNH CÔNG !!!');
		res.redirect('/comment')
	}
	else{
		console.log(err);
		res.redirect('/comment')
	}
  });

}); 

//EDIT COMMENT
router.post('/edit/:ID_Comment', ensureAuthenticated, (req, res) => {

	const { Type, Title, ContentComment } = req.body;

	const ID_Comment = req.params.ID_Comment;

	let now = new Date();
  
  	var TimeEdit = date.format(now, 'YYYY/MM/DD HH:mm:ss');

	comment.UPDATE(ID_Comment,ContentComment,TimeEdit,function(err,result){
	  	if (!err){
			Success(result);
			req.flash('success_msg', 'SỬA BÌNH LUẬN THÀNH CÔNG !!!');
			res.redirect('/comment')
		}
		else{
			console.log(err);
			res.redirect('/comment')
		}
  	});

});

//DELETE Comment
router.post('/delete/:ID_Comment', ensureAuthenticated, (req,res)=>{

	const { ID_Classmodule, ID_Topic } = req.body;

	const ID_Comment = req.params.ID_Comment;

	comment.DELETE(ID_Comment,function(err,result){
		req.flash('error_msg', 'Xóa bình luận thành công !!!');
		if(req.user.decentralization == 1){
			res.redirect('/comment')
		}else{
			res.redirect('/diendan/'+ID_Classmodule+'/'+ID_Topic+'')
		}
	});

});

module.exports = router;
