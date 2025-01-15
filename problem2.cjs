const fs = require("fs");
const path = require("path");

function getList(boardID , callback){
    fs.readFile(_path(`./data/lists_1.json`) , "utf-8" , (err , data)=>{
        if(err){
            return callback(err);
        }
        res =  Object.entries(
            JSON.parse(data)
        ).find(
            ([key , value]
        )=> key==boardID)[1];

        return callback(null , res);
    });
}


function _path(__path){
    return path.resolve(__dirname , __path);
}

module.exports  = {getList};