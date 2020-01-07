const express   = require('express');
const router    = express.Router();
const passport  = require('passport');
const fs  = require('fs');

const { ensureAuthenticated } = require('../../config/auth_fontend');

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

// Load model
const student = require('../../models/student');
const teacher = require('../../models/teacher');
const user = require('../../models/user');

// GET Login
router.get('/', ensureAuthenticated, (req, res) => {

    console.log(req.user);

    if (req.user[0].decentralization == '3') {
      var view = 'fontend-view/thongtin-sv';
    }else{
      var view = 'fontend-view/thongtin-gv';
    }

    res.render(view, {
      tittle: 'Thông tin cá nhân - TruongThiHaTrang',
      layout: 'layout-fontend/layout-khoahoc',
      user: req.user,
    });

});

//EDIT SINH VIÊN
router.post('/editsv', upload.single('Avatar'), ensureAuthenticated, (req, res, next) => {

  const { AvatarOld, password0, password1, password2, Name, BirthDay, Sex, Email, PhoneNumber, Address, Description } = req.body;
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
  const ID_Account = req.user[0].ID_Account;
  const username = req.user[0].username;

  student.UPDATE_Avatar(Name,ID_Account,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,function(err,result){
    if (!err){
      if (password0!="") {
        if (password0 == req.user[0].password) {
          if (password1==password2) {
            password = password1;
            //UPDATE PASS
            user.update(ID_Account,username,password,function(err,result){
              req.flash('success_msg', 'Sửa thông tin và mật khẩu thành công !');
              res.redirect('/thongtin')
            });
          }else{
            req.flash('error_msg', 'Nhập lại mật khẩu không chính xác !');
            res.redirect('/thongtin')
          }
        }else{
          req.flash('error_msg', 'Mật khẩu cũ điền vào không đúng !');
          res.redirect('/thongtin')
        }
      }else{
        req.flash('success_msg', 'Sửa thông tin thành công !');
        res.redirect('/thongtin')
      }
    }
    else{
      console.log(err);
    }
  });

});

//EDIT GIẢNG VIÊN
router.post('/editgv', upload.single('Avatar'), ensureAuthenticated, (req, res, next) => {

  const { AvatarOld, password0, password1, password2, Name, BirthDay, Sex, Email, PhoneNumber, Address, Description } = req.body;
  const file = req.file;
  // console.log(AvatarOld);
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
  const ID_Account = req.user[0].ID_Account;
  const username = req.user[0].username;

  teacher.UPDATE_Avavatar(ID_Account,Name,Avatar,BirthDay,PhoneNumber,Email,Sex,function(err,result){
    if (!err){
      if (password0!="") {
        if (password0 == req.user[0].password) {
          if (password1==password2) {
            password = password1;
            //UPDATE PASS
            user.update(ID_Account,username,password,function(err,result){
              req.flash('success_msg', 'Sửa thông tin và mật khẩu thành công !');
              res.redirect('/thongtin')
            });
          }else{
            req.flash('error_msg', 'Nhập lại mật khẩu không chính xác !');
            res.redirect('/thongtin')
          }
        }else{
          req.flash('error_msg', 'Mật khẩu cũ điền vào không đúng !');
          res.redirect('/thongtin')
        }
      }else{
        req.flash('success_msg', 'Sửa thông tin thành công !');
        res.redirect('/thongtin')
      }

    }
    else{
      console.log(err);
    }
  });

});

module.exports = router;
