const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    database:'renapo',
    user:'root',
    password:''
});

connection.connect(function(error) {
    if(error){
        throw error;
    }else{
        console.log("Connection Successful!");
    }
});
module.exports = connection;