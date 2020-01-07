const LocalStrategy = require('passport-local').Strategy;
const connection = require('../config/database');

// Load User model
const User = require('../models/user');

module.exports = function(passport) {

  passport.use(new LocalStrategy(
    
    (username, password, done) => {

      //USER
      const sql = 'SELECT * FROM account WHERE username = ?';
      
      connection.query(sql, [username], function(err, rows) {
        if (err)
        return done(err);
        if (!rows.length) {
          return done(null, false, {message: 'Kiểm tra lại tên đăng nhập !'});
        }
      
      //PASSWORD
      if(rows[0].password && rows[0].password==password){
        return done(null, rows[0]);
      } else {
        return done(null, false, {message: 'Kiểm tra lại mật khẩu !'});
      }
      });
    }));

  passport.serializeUser(function(account, done) {
      done(null, account.username);
  });

  passport.deserializeUser(function(username, done) {
      connection.query('SELECT * FROM account WHERE username = ?', [username], function(err, rows) {
        if (rows[0].decentralization=='3') {
          connection.query('SELECT account.*, student.StudentCode as Code, student.* FROM student INNER JOIN account on student.ID_Account = account.id_account WHERE student.ID_Account = "'+rows[0].id_account+'"', function(err, student) {
            done(err, student);
          });
        }else if (rows[0].decentralization=='2') {
          connection.query('SELECT account.*, teacher.TeacherCode as Code, teacher.* FROM teacher INNER JOIN account on teacher.ID_Account = account.id_account WHERE teacher.ID_Account = "'+rows[0].id_account+'"', function(err, teacher) {
            done(err, teacher);
          });
        }else{
          done(err, rows[0]);
        }
        
      });
  });

};
