var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	baseConnection.query("SELECT teacher.*, account.* FROM teacher INNER JOIN account ON teacher.ID_Account = account.id_account",function(err,result)
	{
		if (err){
		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_ID_Teacher = function(IDTeacher,Show){
	baseConnection.query("SELECT * FROM `teacher` WHERE ID_Teacher='"+ IDTeacher +"';",function(err,result)
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

exports.Get_Name = function(Name,Show){
	baseConnection.query("SELECT teacher.ID_Teacher FROM `teacher` INNER JOIN `account` ON account.id_account = teacher.ID_Account WHERE account.Name='"+ Name +"';",function(err,result)
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

exports.INSERT = function(ID_Account, TeacherCode, Success){
	
	var sql ="INSERT INTO teacher (ID_Account, TeacherCode) VALUES ( '"+ID_Account+"','"+TeacherCode+"')";
	
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

exports.UPDATE = function(ID_Account, NameTeacher, BirthDay, PhoneNumber, Email, Sex, Success){
	
	var sql ="UPDATE `account` SET `Name`='"+NameTeacher+"', `BirthDay`='"+BirthDay+"', `PhoneNumber`='"+PhoneNumber+"', `Email`='"+Email+"', `Sex`='"+Sex+"' WHERE `ID_Account`='"+ID_Account+"'";
	
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

exports.UPDATE_Avavatar = function(ID_Account, NameTeacher, Avatar, BirthDay, PhoneNumber, Email, Sex, Success){
	
	var sql ="UPDATE `account` SET `Avatar`='"+Avatar+"', `Name`='"+NameTeacher+"', `BirthDay`='"+BirthDay+"', `PhoneNumber`='"+PhoneNumber+"', `Email`='"+Email+"', `Sex`='"+Sex+"' WHERE `ID_Account`='"+ID_Account+"'";
	
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

exports.DELETE = function(IDTeacher,deleteResult){

	var sql = "DELETE FROM teacher WHERE ID_Teacher = '"+ IDTeacher+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			deleteResult(result);
		}
		else{
			
		}
	});

}

exports.FindTeacherCode = function(TeacherCode,Success){

	var sql = "SELECT * FROM teacher WHERE TeacherCode = '"+TeacherCode+"'";

	baseConnection.query(sql,function(err,result){
		if (err) {
			console.log(err);
		}else{
			Success(err,result);
		}
	});
}


exports.Get_ID_Account = function(ID_Account,Show){
	baseConnection.query("SELECT * FROM `teacher` WHERE ID_Account='"+ ID_Account +"'",function(err,result)
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


