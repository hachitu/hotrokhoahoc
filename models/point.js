var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	baseConnection.query("SELECT account.Name as Hoten, point.*, student.*, subject.*,status.name FROM point INNER JOIN student on point.ID_Student = student.ID_Student INNER JOIN subject on point.ID_Subject = subject.ID_Subject INNER JOIN status on point.status = status.id INNER JOIN account on student.ID_Account = account.id_account",function(err,result)
	{
		if (err){
		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_ID_Student = function(ID_Student,Show){
	baseConnection.query("SELECT point.*, student.*, subject.* FROM point INNER JOIN student on point.ID_Student = student.ID_Student INNER JOIN subject on point.ID_Subject = subject.ID_Subject WHERE student.ID_Student='"+ ID_Student +"';",function(err,result)
	{
		if (err){
			console.log(err);
		}
		else
		{
			Show(err,result);
		}
	});
}

exports.INSERT = function(ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,Success){

	var sql ="INSERT INTO `point`(`ID_Student`, `ID_Subject`, `chuyencan`, `giuaky`, `cuoiky`, `tongket10`, `tongket4`, `chu`, `status`) VALUES ('"+ID_Student+"','"+ID_Subject+"','"+chuyencan+"','"+giuaky+"','"+cuoiky+"','"+tongket10+"','"+tongket4+"','"+chu+"','"+status+"')";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(result);
		}
		else{
			console.log(err);
		}

	});
}

exports.UPDATE = function(ID_Point,ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,Success){

	var sql ="UPDATE `point` SET `ID_Student`='"+ID_Student+"',`ID_Subject`='"+ID_Subject+"',`chuyencan`='"+chuyencan+"',`giuaky`='"+giuaky+"',`cuoiky`='"+cuoiky+"',`tongket10`='"+tongket10+"',`tongket4`='"+tongket4+"',`chu`='"+chu+"',`status`='"+status+"' WHERE `ID_Point`='"+ID_Point+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(result);
		}
		else{
			console.log(err);
		}

	});
}

exports.IMPORT = function(ID_Student,ID_Subject,chuyencan,giuaky,cuoiky,tongket10,tongket4,chu,status,Success){

	var sql ="UPDATE `point` SET `chuyencan`='"+chuyencan+"',`giuaky`='"+giuaky+"',`cuoiky`='"+cuoiky+"',`tongket10`='"+tongket10+"',`tongket4`='"+tongket4+"',`chu`='"+chu+"',`status`='"+status+"' WHERE `ID_Student`='"+ID_Student+"' AND `ID_Subject`='"+ID_Subject+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(result);
		}
		else{
			console.log(err);
		}

	});
}

exports.DELETE = function(ID_Point,deleteResult){

	var sql = "DELETE FROM point WHERE ID_Point = '"+ ID_Point+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			deleteResult(result);
		}
		else{
			console.log(err);
		}
	});

}

exports.AutoLevelUp = function (ID_Student, Level){

	//SELECT COUNT SỐ MÔN THEO LEVEL
	var sql1 = "SELECT COUNT(ID_Subject) AS CountSubject FROM subject WHERE Level = '"+Level+"'"

	//SELECT COUNT SỐ MÔN THEO STATUS
	var sql2 = "SELECT COUNT(subject.ID_Subject) AS CountSubjectSuccess FROM point INNER JOIN student on point.ID_Student = student.ID_Student INNER JOIN subject on point.ID_Subject = subject.ID_Subject WHERE subject.Level = '"+Level+"' AND student.ID_Student = '"+ID_Student+"' AND point.status = '1'";

	baseConnection.query(sql1,function(err,result){
		var CountSubject = result[0].CountSubject;

		baseConnection.query(sql2,function(err,result1){

			var CountSubjectSuccess = result1[0].CountSubjectSuccess;

			if(CountSubject == CountSubjectSuccess){
				Level += 1;
				//UPLEVEL
				var sql3 = "UPDATE `student` SET `Level`='"+Level+"' WHERE ID_Student = '"+ID_Student+"'";
				baseConnection.query(sql3);
			}

		});
	});

}

exports.ListSubject = function(ID_Student,Show){
	//SELECT TRẠNG THÁI CÁC MÔN ĐÃ CÓ ĐIỂM
	var sql = "SELECT point.*, subject.* FROM point INNER JOIN student on point.ID_Student = student.ID_Student INNER JOIN subject on point.ID_Subject = subject.ID_Subject WHERE point.ID_Student = '"+ID_Student+"'";

	baseConnection.query(sql,function(err,result){
		if (err) {
			console.log(err)
		}else{
			Show(err,result);
		}
	});
}

exports.ListClass = function(ID_Student,Level,CallBack){

	var sql = "SELECT point.status, subject.ID_Subject, subject.Image, subject.NameSubject, classmodule.ID_Classmodule, classmodule.NameClass, teacher.ID_Teacher, Account.Name, classmodule.* FROM subject INNER JOIN point on subject.ID_Subject = point.ID_Subject INNER JOIN classmodule on subject.ID_Subject = classmodule.ID_Subject INNER JOIN teacher on classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account on teacher.ID_Account = account.id_account WHERE point.ID_Student = '"+ID_Student+"' AND subject.Level='"+Level+"' AND point.status='2'";
	baseConnection.query(sql,function(err,result){
		if (err) {
			CallBack(err,null);
		} else {
			CallBack(null,result);
		}
	});

}

// SELECT point.status, subject.ID_Subject, subject.NameSubject, classmodule.ID_Classmodule, classmodule.NameClass, teacher.ID_Teacher, teacher.NameTeacher, classmodule.CountStudent
// FROM subject
// INNER JOIN point
// on subject.ID_Subject = point.ID_Subject
// INNER JOIN classmodule
// on subject.ID_Subject = classmodule.ID_Subject
// INNER JOIN teacher
// on classmodule.ID_Teacher = teacher.ID_Teacher
// WHERE point.ID_Student = 1 AND subject.Level=1 AND status=2
