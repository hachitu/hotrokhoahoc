var baseConnection = require('../config/database');

exports.GetAll = function(ShowAll){

	var sql = "SELECT detailclassmodule.*, student.*, classmodule.* FROM detailclassmodule INNER JOIN student on detailclassmodule.ID_Student = student.ID_Student INNER JOIN classmodule on detailclassmodule.ID_Classmodule = classmodule.ID_Classmodule";

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

exports.GetAlldetailclassmodule = function(ShowAll){

	var sql = "SELECT * FROM detailclassmodule ";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err);
		}
		else
		{
			ShowAll(result);
		}
	});
}

exports.Regis = function(ID_Student,ID_Subject,ID_Classmodule,TimeRegis,Success){

	var sql1 = "INSERT INTO `detailclassmodule`(`ID_Classmodule`, `ID_Student`, `TimeRegis`) VALUES ('"+ID_Classmodule+"','"+ID_Student+"','"+TimeRegis+"')";

	var sql2 = "SELECT COUNT(ID_Student) AS CountST FROM detailclassmodule WHERE ID_Classmodule = '"+ID_Classmodule+"'";

	var sql100 = "SELECT classmodule.CountStudent FROM classmodule WHERE ID_Classmodule = '"+ID_Classmodule+"'";


	baseConnection.query(sql2,function(err,result)
	{
		baseConnection.query(sql100,function(err,result2)
		{
			if(result[0].CountST < result2[0].CountStudent )
			{
				baseConnection.query(sql1,function(err,result)
				{
					if (err){
						Success(err,null);
					}else{
						Success(null,result);
						var sql3 = "UPDATE `point` SET `status`='3' WHERE ID_Student = '"+ID_Student+"' AND ID_Subject = '"+ID_Subject+"'";
						//UPDATE POINT
						baseConnection.query(sql3,function(err,result)
						{
							if (err){
								console.log(err);
							}else{
								Success(result);
							}
						});
					}
				});
			}
			else {
				console.log("lớp học đã đủ sinhviên");
			}
		});
	});
}

exports.GetStudentInClass = function(ID_Classmodule,Success){

	var sql = "SELECT * FROM `detailclassmodule` WHERE `ID_Classmodule` = '"+ID_Classmodule+"' AND status=1"

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			Success(err,null);
		}else{
			Success(null,result);
		}
	});
}

exports.GetStudentInClass1 = function(ID_Classmodule,Success){

	var sql = "SELECT * FROM `detailclassmodule` WHERE `ID_Classmodule` = '"+ID_Classmodule+"'"

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			Success(err,null);
		}else{
			Success(null,result);
		}
	});
}

exports.ShowClass = function(status,ID_Student,Success){

	var sql = "SELECT account.*, teacher.*, detailclassmodule.*, subject.*, classmodule.* FROM detailclassmodule INNER JOIN classmodule ON detailclassmodule.ID_Classmodule = classmodule.ID_Classmodule INNER JOIN subject ON classmodule.ID_Subject = subject.ID_Subject INNER JOIN teacher ON classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account ON teacher.ID_Account = account.id_account WHERE detailclassmodule.ID_Student = '"+ID_Student+"' AND classmodule.status_teacher = '"+status+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err,null);
		}else{
			Success(null,result);
		}
	});
}

exports.ShowClassTeacher = function(status,ID_Teacher,Success){

	if (status==0) {
		var sql = "SELECT account.*, teacher.*, classmodule.*,subject.* FROM classmodule INNER JOIN subject on classmodule.ID_Subject = subject.ID_Subject INNER JOIN teacher on classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account on teacher.ID_Account = account.id_account WHERE classmodule.ID_Teacher = '"+ID_Teacher+"' AND classmodule.status_teacher = '"+status+"' "
	}else{
		var sql = "SELECT account.*, teacher.*, classmodule.*,subject.* FROM classmodule INNER JOIN subject on classmodule.ID_Subject = subject.ID_Subject INNER JOIN teacher on classmodule.ID_Teacher = teacher.ID_Teacher INNER JOIN account on teacher.ID_Account = account.id_account WHERE classmodule.ID_Teacher = '"+ID_Teacher+"' AND classmodule.status_teacher = '"+status+"' "
	}

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err,null);
		}else{
			Success(null,result);
		}
	});
}

exports.CloseClass = function(ID_Classmodule,Success){

	var sql = "UPDATE `detailclassmodule` SET `status`= '1' WHERE `ID_Classmodule` = '"+ID_Classmodule+"' "
	var sql1 = "UPDATE `classmodule` SET `status_teacher`='1' WHERE `ID_Classmodule` = '"+ID_Classmodule+"' "

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			console.log(err,null);
		}else{
			baseConnection.query(sql1,function(err,result)
			{
				if (err){
					console.log(err,null);
				}else{
					Success(null,result);
				}
			});
		}
	});
}

// ĐỔI TRẠNG THÁI STATUS của sinh viên trong bảng detailclassmodule sang 1 = Đã được duyệt
exports.UpdateStatus = function(ID_Detail,Success){

	var sql = "UPDATE `detailclassmodule` SET `status`=1 WHERE `ID_Detail`='"+ID_Detail+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (err){
			Success(err,null);
		}else{
			Success(null,result);
		}
	});
}


// XÓA SINH VIÊN ĐĂNG KÝ VÀO LỚP (BẢNG DETAIL)
exports.DeleteDetail = function(ID_Detail,Success){

	var sql_select_IDStudent_IDSubject = "SELECT detailclassmodule.*,classmodule.ID_Subject FROM `detailclassmodule` INNER JOIN classmodule ON detailclassmodule.ID_Classmodule = classmodule.ID_Classmodule WHERE ID_Detail= '"+ID_Detail+"'"

	baseConnection.query(sql_select_IDStudent_IDSubject,function(err,result)
	{
		if (err){
			Success(err,null);
		}else{
			result.forEach(function(row){
				var sql3 = "UPDATE `point` SET `status`='2' WHERE ID_Student = '"+row.ID_Student+"' AND ID_Subject = '"+row.ID_Subject+"'";
				//UPDATE POINT
				baseConnection.query(sql3,function(err,result)
				{
					if (err){
						Success(err,null);
					}else{
						var sql = "DELETE FROM `detailclassmodule` WHERE `ID_Detail`='"+ID_Detail+"'";
						baseConnection.query(sql,function(err,result){
							if (err){
								Success(err,null);
							}else{
								Success(null,result);
							}
						});
					}
				});
			});
		}
	});
}
