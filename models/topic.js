var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){

	baseConnection.query("SELECT * FROM `topic`",function(err,result)
	{
		if (err){

		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_By_ID_ClassModule = function(ID_ClassModule,ShowALL){

	var sql = "SELECT subject.NameSubject, account.Name,classmodule.NameClass, topic.* FROM `topic` INNER JOIN classmodule on classmodule.ID_Classmodule = topic.FK_ID_Classmodule INNER JOIN subject on subject.ID_Subject = classmodule.ID_Subject INNER JOIN teacher on teacher.ID_Teacher = classmodule.ID_Teacher INNER JOIN account on account.id_account = topic.ID_Account WHERE FK_ID_Classmodule = '"+ID_ClassModule+"' ORDER BY Type ASC, ID_Topic DESC";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			ShowALL(err,null);
		}
		else
		{
			ShowALL(null,result);
		}
	});
}

exports.INSERT = function(ID_Classmodule,ID_Account,Time,Type,Title,Content,Success){
	
	var sql ="INSERT INTO topic (FK_ID_Classmodule,ID_Account,Time,Type,Title,Content) VALUES ( '"+ID_Classmodule+"','"+ID_Account+"','"+Time+"','"+Type+"','"+Title+"','"+Content+"')";
	
	baseConnection.query(sql,function(err,result)	
	{
		if (!err){

			var sql2 = "INSERT INTO comment (FK_ID_Topic,ID_Account,ContentComment,Time) VALUES ( '"+result.insertId+"','"+ID_Account+"','"+Content+"','"+Time+"')";
			baseConnection.query(sql2,function(err,result2){

				Success(null,"Thêm thành công !!!",result.insertId,result2.insertId);
				
			});
		}
		else{
			Success(err,null,null,null);
		}
		
	});
}

exports.UPDATE = function(ID_Topic,TimeEdit,Type,Title,Content,Success){
	
	var sql ="UPDATE `topic` SET `TimeEdit`='"+TimeEdit+"',`Type`='"+Type+"',`Title`='"+Title+"',`Content`='"+Content+"' WHERE `ID_Topic`='"+ID_Topic+"'";
	
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

exports.DELETE = function(ID_Topic,deleteResult){

	var sql = "DELETE FROM topic WHERE ID_Topic = '"+ ID_Topic+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){

			var sql1 = "DELETE FROM comment WHERE FK_ID_Topic = '"+ ID_Topic+"'"; 
			baseConnection.query(sql1,function(err,result1)
			{
				if (result1.affectedRows !=0){
					deleteResult(result);
				}
				else{
					
				}
			});
		}
		else{
			
		}
	});

}
