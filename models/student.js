var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	baseConnection.query("SELECT student.*, account.* FROM student INNER JOIN account ON student.ID_Account = account.id_account",function(err,result)
	{
		if (err){
		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_ID_Student = function(StudentCode,Show){
	baseConnection.query("SELECT * FROM `student` WHERE StudentCode='"+ StudentCode +"'",function(err,result)
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

exports.Get_StudentCode = function(ID_Student,Show){
	baseConnection.query("SELECT student.StudentCode, account.Name FROM `student` INNER JOIN `account` ON account.id_account = student.ID_Account WHERE ID_Student='"+ ID_Student +"'",function(err,result)
	{
		if (err){
			Show(err,null);
		}
		else
		{
			Show(null,result);
		}
	});
}

exports.Get_Student1 = function(ID_Student,Show){
	baseConnection.query("SELECT student.*, account.* FROM `student` INNER JOIN `account` ON account.id_account = student.ID_Account WHERE ID_Student='"+ ID_Student +"'",function(err,result)
	{
		if (err){
			Show(err,null);
		}
		else
		{
			Show(null,result);
		}
	});
}


exports.Get_ID_Subject = function(IDSubject,ListStudent){

	sql = "SELECT * FROM `student_subject` WHERE ID_Subject='"+ IDSubject +"'";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err);
		}
		else
		{
			result.forEach(function(rows){
				sql1 = "SELECT * FROM `student` WHERE ID_Student='"+ rows.ID_Student +"'";
				baseConnection.query(sql1,function(err,result1){
					if (err){
						console.log(err);
					}
					else
					{
						ListStudent(result1);
					}
				});
			});
		}
	});
}

exports.Get_Name = function(Name,Show){
	baseConnection.query("SELECT student.ID_Student FROM `student` INNER JOIN `account` ON account.id_account = student.ID_Account WHERE account.Name='"+ Name +"';",function(err,result)
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

exports.INSERT = function(ID_Account ,StudentCode,Description,Success){

	var sql ="INSERT INTO student (ID_Account,StudentCode,Description,Level) VALUES ( '"+ID_Account+"','"+StudentCode+"','"+Description+"','1')";
	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			var sql1 = "SELECT student.ID_Student FROM student WHERE ID_Account = '"+ID_Account+"'";
			baseConnection.query(sql1,function(err,student){
				//CHECK POINT
				var sql2 = "SELECT * FROM point WHERE ID_Student='"+student[0].ID_Student+"'";
				baseConnection.query(sql2,function(err,result2){
					if (result2 == "") {
						//SELECT ALL SUBJECT
						var sql3 = "SELECT subject.ID_Subject FROM subject";
						baseConnection.query(sql3,function(err,subject){
							subject.forEach(function(rows){
								//ADD TO POINT
								var sql4 = "INSERT INTO `point`(`ID_Subject`, `ID_Student`, `status`) VALUES ('"+rows.ID_Subject+"','"+student[0].ID_Student+"','2')";
								baseConnection.query(sql4,function(err,result4){
								});
							});
							Success(subject);
						});
					}
				});
			});
		}
		else{
			console.log(err);
		}

	});
}

exports.UPDATE = function(NameStudent,ID_Account,BirthDay,PhoneNumber,Email,Address,Sex,Success){

	var sql ="UPDATE `account` SET `Name`='"+NameStudent+"',`BirthDay`='"+BirthDay+"',`PhoneNumber`='"+PhoneNumber+"',`Email`='"+Email+"',`Address`='"+Address+"',`Sex`='"+Sex+"' WHERE `ID_Account`='"+ID_Account+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(null,result);
		}
		else{
			Success(err,null);
		}

	});
}

exports.UPDATE_CLASS = function(IDStudent,Description,Success){

	var sql ="UPDATE `student` SET `Description`='"+Description+"' WHERE `ID_Student`='"+IDStudent+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(null,result);
		}
		else{
			Success(err,null);
		}

	});
}

exports.UPDATE_Avatar = function(NameStudent,ID_Account,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,Success){

	var sql ="UPDATE `account` SET `Avatar`='"+Avatar+"',`Name`='"+NameStudent+"',`BirthDay`='"+BirthDay+"',`PhoneNumber`='"+PhoneNumber+"',`Email`='"+Email+"',`Address`='"+Address+"',`Sex`='"+Sex+"' WHERE `ID_Account`='"+ID_Account+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			Success(null,result);
		}
		else{
			Success(err,null);
		}

	});
}

exports.DELETE = function(IDStudent,deleteResult){

	var sql = "DELETE FROM student WHERE ID_Student = '"+ IDStudent+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			deleteResult(result);
		}
		else{

		}
	});

}

exports.Get_ID_Account = function(ID_Account,Show){
	baseConnection.query("SELECT * FROM `student` WHERE ID_Account='"+ ID_Account +"'",function(err,result)
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
