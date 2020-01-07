const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

const { ensureAuthenticated } = require('../../config/auth_fontend');

// Load model
const User = require('../../models/user');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      if(req.user.decentralization!=1){
          res.redirect('/khoahochientai');
      }else{
        req.logout();
        req.flash('success_msg', 'Bạn không có quyền truy cập !');
        res.redirect('/trangchu');
      }
    }else{
      res.render('fontend-view/login', {
        layout: false
      });
    }
});

// // GET Login
// router.get('/', (req, res) => {
//     if (req.isAuthenticated()) {
//       if(req.user.decentralization!=1){
//           res.render('fontend-view/khoahochientai', {
//             tittle: 'TruongThiHaTrang - login',
//             layout: 'layout-fontend/layout-trangchu',
//             user: req.user
//           });
//       }else{
//         req.logout();
//         req.flash('success_msg', 'Bạn không có quyền truy cập !');
//         res.redirect('/trangchu');
//       }
//     }else{
//       res.render('fontend-view/login', {
//         layout: false
//       });
//     }
// });

// POST Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/trangchu',
    failureRedirect: '/trangchu',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Bạn đã đăng xuất !');
  res.redirect('/trangchu');
});

module.exports = router;
