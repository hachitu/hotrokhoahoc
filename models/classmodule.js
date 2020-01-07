var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	
	baseConnection.query("SELECT classmodule.*, teacher.*, account.Name, subject.NameSubject FROM classmodule INNER JOIN teacher on classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account on teacher.ID_Account = account.id_account INNER JOIN subject on classmodule.ID_Subject = subject.ID_Subject",function(err,result)
	{
		if (err){
		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.GetAlldetailclassmodule = function(ShowAll){

	var sql = "SELECT * FROM detailclassmodule ";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err);
		}
		else
		{
			ShowALL(result);
		}
	});
}


exports.Get_ID_Class = function(ID_Classmodule,Show){
	baseConnection.query("SELECT classmodule.*, teacher.*, account.Name, account.username, subject.NameSubject FROM classmodule INNER JOIN teacher on classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account on teacher.ID_Account = account.id_account INNER JOIN subject on classmodule.ID_Subject = subject.ID_Subject WHERE ID_Classmodule='"+ID_Classmodule+"'",function(err,result)
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

exports.Get_Name = function(NameClass,Show){
	baseConnection.query("SELECT * FROM `classmodule` WHERE NameClass='"+ NameClass +"';",function(err,result)
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

exports.INSERT = function(NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent,Success){
	
	var sql ="INSERT INTO classmodule (NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent) VALUES ( '"+NameClass+"',N'"+ID_Teacher+"','"+ID_Subject+"','"+TimeStart+"','"+TimeEnd+"','"+CountStudent+"')";
	
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

exports.UPDATE = function(ID_Classmodule,NameClass,ID_Teacher,ID_Subject,TimeStart,TimeEnd,CountStudent,Success){
	
	var sql ="UPDATE `classmodule` SET `NameClass`='"+NameClass+"',`ID_Teacher`='"+ID_Teacher+"',`ID_Subject`='"+ID_Subject+"',`TimeStart`='"+TimeStart+"',`TimeEnd`='"+TimeEnd+"',`CountStudent`='"+CountStudent+"' WHERE `ID_Classmodule`='"+ID_Classmodule+"'";
	
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

exports.DELETE = function(ID_Classmodule,deleteResult){

	var sql = "DELETE FROM classmodule WHERE ID_Classmodule = '"+ ID_Classmodule+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			deleteResult(result);
		}
		else{
			
		}
	});

}

exports.Get_ID_Teacher = function(ID_Teacher,Show){
	baseConnection.query("SELECT * FROM `classmodule` WHERE ID_Teacher='"+ ID_Teacher +"'",function(err,result)
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

exports.Get_Status = function(ID_Teacher,Status,Show){
	baseConnection.query("SELECT * FROM `classmodule` WHERE ID_Teacher='"+ ID_Teacher +"' AND status='"+ status +"'",function(err,result)
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






