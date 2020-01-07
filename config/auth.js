module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Bạn chưa đăng nhập !');
    res.redirect('/admin');
  }
};

