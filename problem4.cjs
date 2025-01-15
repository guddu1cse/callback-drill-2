const {getBoard} = require("./problem1.cjs")
const {getList} = require("./problem2.cjs")
const {getCards} = require("./problem3.cjs")
function problem4(){
    getBoard("mcu453ed" , (err , data)=>{
        if(err) return console.error(err);
        console.log(data);
        const boardID = data.id;
        getList(boardID , (err , data)=>{
            if(err) return console.error(err);
            console.log(data);
            
            //getting card for mind list
            const listID = data.find((val)=> val.name == "Mind").id;
            getCards(listID , (err , data)=>{
                if(err) return console.error(err);
                console.log(data);
            });
        });
    })
}

module.exports  = problem4;