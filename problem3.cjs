const fs = require("fs");
const path = require("path");

function getCards(listID , callback){
    fs.readFile(_path(`./data/cards_2.json`) , "utf-8" , (err , data)=>{
        if(err){
            return callback(err);
        }
        const card = JSON.parse(data)[listID] || [];
        callback(null,card);
    });
}


function _path(__path){
    return path.resolve(__dirname , __path);
}

module.exports  = {getCards};