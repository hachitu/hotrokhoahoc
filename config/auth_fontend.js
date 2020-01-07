module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      if(req.user.decentralization!=1){
      	return next();
      }
    }
    req.flash('error_msg', 'Bạn chưa đăng nhập !');
    res.redirect('/trangchu');
  }
};

