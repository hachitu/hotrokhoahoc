var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){

	var sql = "SELECT * FROM `comment` ";

	baseConnection.query(sql,function(err,result)
	{
		if (err){

		}
		else
		{
			ShowALL(result);
		}
	});
}

exports.Get_By_ID_Topic = function(ID_Topic,ShowALL){

	var sql = "SELECT comment.ID_Account as ID_Account_Comment, comment.*, topic.*,account.* FROM `comment` INNER JOIN topic on comment.FK_ID_Topic = topic.ID_Topic INNER JOIN account on account.id_account = comment.ID_Account WHERE FK_ID_Topic = '"+ID_Topic+"' ORDER BY `ID_Comment` ASC";

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

exports.INSERT = function(ID_Topic,ID_Account,Content,Time,Success){
	
	var sql ="INSERT INTO comment (FK_ID_Topic,ID_Account,ContentComment,Time) VALUES ( '"+ID_Topic+"','"+ID_Account+"','"+Content+"','"+Time+"')";
	
	baseConnection.query(sql,function(err,result)	
	{
		if (!err){
			Success(null,result,result.insertId);
		}
		else{
			Success(err,null,null,null);
		}
		
	});
}

exports.UPDATE = function(ID_Comment,ContentComment,TimeEdit,Success){
	
	var sql ="UPDATE `comment` SET `ContentComment`='"+ContentComment+"',`TimeEdit`='"+TimeEdit+"' WHERE `ID_Comment`='"+ID_Comment+"'";
	
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

exports.DELETE = function(ID_Comment,deleteResult){

	var sql = "DELETE FROM comment WHERE ID_Comment = '"+ ID_Comment+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (result.affectedRows !=0){
			deleteResult(result);
		}
		else{
			
		}
	});

}

// exports.ChuanHoaXau = function(val,success) {

// 	lienket = val;

// 	slug = lienket.toLowerCase();
//     //Đổi ký tự có dấu thành không dấu
//     slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
//     slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
//     slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
//     slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
//     slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
//     slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
//     slug = slug.replace(/đ/gi, 'd');
//     //Xóa các ký tự đặt biệt
//     slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
//     //Đổi khoảng trắng thành ký tự gạch ngang
//     slug = slug.replace(/ /gi, " - ");
//     //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
//     //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
//     slug = slug.replace(/\-\-\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-/gi, '-');
//     //Xóa các ký tự gạch ngang ở đầu và cuối
//     slug = '@' + slug + '@';
//     slug = slug.replace(/\@\-|\-\@|\@/gi, '');

//     success(slug);
// }