const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

const { ensureAuthenticated } = require('../../config/auth');

//UPLOAD FILE
const multer = require('multer');

// MODEL
var user = require("../../models/user");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
  url: function (req, file, cb) {
    cb(null, 'uploads/' + file.filename)
  },
})

var upload = multer({ storage: storage })

// Load model
const User = require('../../models/user');

// GET Login
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      if(req.user.decentralization==1){
          res.render('backend-view/home', {
            tittle: 'TruongThiHaTrang - Admin',
            pageheader: 'TruongThiHaTrang - Admin',
            layout: 'layout-backend/layout-table',
            name: req.user.username

          });
      }else{
        req.logout();
        req.flash('success_msg', 'You have no rights!');
        res.redirect('/admin');
      }
    }else{
      res.render('backend-view/login', {
        layout: false
      });
    }
});

// POST Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Bạn đã đăng xuất !');
  res.redirect('/admin');
});

// TestExcelImport
router.get('/testimport', (req, res) => {
  res.render('backend-view/testimport',{
  layout: false,
  });
});

// TestUploadFile
router.get('/testupload', (req, res) => {
  res.render('backend-view/testupload',{
  layout: false,
  });
});

// Uploading a Single File
router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})

//Uploading multiple files
router.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files

  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }

  files.forEach(function(row){
    console.log(row);
  });

  res.send(files)
})

// Uploading Images
router.post('/uploadphoto', upload.single('picture'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString('base64');
  // Define a JSONobject for the image attributes for saving to database

  var finalImg = {
      contentType: req.file.mimetype,
      image:  new Buffer(encode_image, 'base64')
   };
})

//EDIT SINH VIÊN
router.post('/changepass', ensureAuthenticated, (req, res, next) => {

  const { password0, password1, password2 } = req.body;

  const ID_Account = req.user.id_account;

  if (password0!="") {
    if (password0 == req.user.password) {
      if (password1==password2) {
        password = password1;
        //UPDATE PASS
        user.update1(ID_Account,password,function(err,result){
          req.flash('success_msg', 'Đổi mật khẩu thành công !');
          res.redirect('/admin')
        });
      }else{
        // alert("Nhập lại mật khẩu không chính xác !");
        req.flash('error_msg', 'Nhập lại mật khẩu không chính xác !');
        res.redirect('/admin')
      }
    }else{
      // alert("Mật khẩu cũ không chính xác !");
      req.flash('error_msg', 'Mật khẩu cũ điền vào không đúng !');
      res.redirect('/admin')
    }
  }

});


module.exports = router;
