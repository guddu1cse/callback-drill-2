
/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

const fs = require("fs");
const path = require("path");

function getBoard(id , callback){
    fs.readFile(_path(`./data/boards_2.json`) , "utf-8" , (err , data)=>{
        if(err){
            return callback(err);
        }
        res =  JSON.parse(data).find((board)=>board.id == id);
        return callback(null , res);
    });
}

function _path(__path){
    return path.resolve(__dirname , __path);
}

module.exports  = {getBoard};