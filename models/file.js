var baseConnection = require('../config/database');

exports.GetAll = function(ShowALL){
	baseConnection.query("SELECT * FROM `file`",function(err,result)
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

exports.Get_By_ID_Topic = function(id_topic,ShowALL){

	var sql = "SELECT * FROM `file` WHERE id_topic = '"+id_topic+"'";

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

exports.Get_By_ID_cmt = function(id_cmt,ShowALL){

	var sql = "SELECT * FROM `file` WHERE id_cmt = '"+id_cmt+"'";

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

exports.INSERT = function(name_file,url_file,id_topic,id_cmt,Success){
	
	var sql ="INSERT INTO file (name_file,url_file,id_topic,id_cmt) VALUES ( '"+name_file+"','"+url_file+"','"+id_topic+"','"+id_cmt+"')";
	
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

exports.DELETE = function(id_file,deleteResult){

	var sql = "DELETE FROM file WHERE id_file = '"+ id_file+"'";
	
	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			deleteResult(null,result);
		}
		else{
			deleteResult(err,null);
		}
	});

}
