module.exports = function(app){

	// Back-end
    app.use('/admin', require('../routes/back-end/admin.js'));
    app.use('/student', require('../routes/back-end/student.js'));
    app.use('/teacher', require('../routes/back-end/teacher.js'));
    app.use('/subject', require('../routes/back-end/subject.js'));
    app.use('/classmodule', require('../routes/back-end/classmodule.js'));
    app.use('/point', require('../routes/back-end/point.js'));
    app.use('/topic', require('../routes/back-end/topic.js'));
    app.use('/comment', require('../routes/back-end/comment.js'));

    //Font-end
    app.use('/', require('../routes/font-end/trangchu.js'));
    app.use('/trangchu', require('../routes/font-end/trangchu.js'));
    app.use('/khoahoctuonglai', require('../routes/font-end/khoahoctuonglai.js'));
    app.use('/khoahochientai', require('../routes/font-end/khoahochientai.js'));
    app.use('/khoahocquakhu', require('../routes/font-end/khoahocquakhu.js'));
    app.use('/quatrinh', require('../routes/font-end/quatrinh.js'));
    app.use('/thongtin', require('../routes/font-end/thongtin.js'));
    app.use('/diendan', require('../routes/font-end/diendan.js'));
    
    //other routes..
}