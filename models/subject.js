var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	baseConnection.query("SELECT * FROM subject",function(err,result)
	{
		if (err){
		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_ID_Subject = function(IDSubject,Show){
	baseConnection.query("SELECT * FROM `subject` WHERE ID_Subject='"+ IDSubject +"';",function(err,result)
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


exports.Get_ID_Teacher = function(IDTeacher,ListSubject){
	
	sql = "SELECT * FROM `teacher_subject` WHERE ID_Teacher='"+ IDTeacher +"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err);
		}
		else
		{
			result.forEach(function(rows){
				sql1 = "SELECT * FROM `subject` WHERE ID_Subject='"+ rows.ID_Subject +"'";
				
				baseConnection.query(sql1,function(err,result1){
					if (err){
						console.log(err);
					}
					else
					{
						ListSubject(result1);
					}
				});
			});
		}
	});
}


exports.Get_Name = function(NameSubject,Show){
	baseConnection.query("SELECT * FROM `subject` WHERE NameSubject='"+ NameSubject +"';",function(err,result)
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

exports.INSERT = function(Avatar,NameSubject,Number,Description,Level,Success){
	
	var sql ="INSERT INTO subject (Image,NameSubject,Number,Description,Level) VALUES ( '"+Avatar+"',N'"+NameSubject+"','"+Number+"','"+Description+"','"+Level+"')";
	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			var sql1 = "SELECT subject.ID_Subject FROM subject WHERE NameSubject = '"+NameSubject+"'";
			baseConnection.query(sql1,function(err,subject){
				//CHECK POINT
				var sql2 = "SELECT * FROM point WHERE ID_Subject='"+subject[0].ID_Subject+"'";
				baseConnection.query(sql2,function(err,result2){
					if (result2 == "") {
						//SELECT ALL STUDENT
						var sql3 = "SELECT student.ID_Student FROM student";
						baseConnection.query(sql3,function(err,student){
							student.forEach(function(rows){
								//ADD TO POINT
								var sql4 = "INSERT INTO `point`(`ID_Student`, `ID_Subject`, `status`) VALUES ('"+rows.ID_Student+"','"+subject[0].ID_Subject+"','2')";
								baseConnection.query(sql4,function(err,result4){
									if (err) {
										console.log(err);
									}else{
										Success(result4);
									}
								});
							});
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

exports.UPDATE = function(Avatar,IDSubject,NameSubject,Number,Description,Level,Success){
	
	var sql ="UPDATE `subject` SET `Image`='"+Avatar+"',`NameSubject`='"+NameSubject+"',`Number`='"+Number+"',`Description`='"+Description+"',`Level`='"+Level+"' WHERE `ID_Subject`='"+IDSubject+"'";
	
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

exports.DELETE = function(IDSubject,deleteResult){

	var sql = "DELETE FROM subject WHERE ID_Subject = '"+ IDSubject+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			//DELETE POINT
			var sql1 = "DELETE FROM `point` WHERE ID_Subject = '"+IDSubject+"'";
			baseConnection.query(sql1,function(result){
				deleteResult(result);
			});
		}
		else{
			console.log(err);
		}
	});

}
