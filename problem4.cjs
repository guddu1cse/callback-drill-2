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

            data = data.map((val)=> val.id);
            data.forEach((id)=>{
                getCards(id , (err , data)=>{
                    if(err) return console.error(err);
                    data.forEach((card)=> console.log(card));
                });
            });
        });
    })
}

module.exports  = problem4;