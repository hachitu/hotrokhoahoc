var baseConnection = require('../config/database');

exports.register = function(username,password,Name,Avatar,BirthDay,PhoneNumber,Email,Address,Sex,decentralization,success){
	var sql = "INSERT INTO `account`(`username`, `password`, `decentralization`, `Name`, `Avatar`, `BirthDay`, `PhoneNumber`, `Email`, `Address`, `Sex`) VALUES ('"+username+"','"+password+"','"+decentralization+"',N'"+Name+"','"+Avatar+"','"+BirthDay+"','"+PhoneNumber+"','"+Email+"',N'"+Address+"','"+Sex+"')";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			success(null,result,result.insertId);
		}
		else{
			success(err,null,null);
		}
		
	});
}

exports.update = function(id_account,username,password,success){
	var sql = "UPDATE `account` SET `username`='"+username+"',`password`='"+password+"' WHERE `id_account`='"+id_account+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			success(result);
		}
		else{
			console.log(err);
		}
		
	});
}

exports.update1 = function(id_account,password,success){
	var sql = "UPDATE `account` SET `password`='"+password+"' WHERE `id_account`='"+id_account+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			success(result);
		}
		else{
			console.log(err);
		}

	});
}

exports.getAccountByUsername = function(username,Show){
	var sql = "SELECT `id_account` FROM `account` WHERE `username`='"+username+"'";
	baseConnection.query(sql,function(err,result)	
	{
		if (err) {
			console.log(err);
		}else{
			Show(err,result);
		}
		
	});
}

exports.delete = function(id_account,success){
	var sql = "DELETE FROM `account` WHERE id_account = '"+id_account+"'";

	baseConnection.query(sql,function(err,result)
	{
		if (!err){
			success(result);
		}
		else{
			console.log(err);
		}
		
	});
}
