/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const {getBoard} = require("./problem1.cjs")
const {getList} = require("./problem2.cjs")
const {getCards} = require("./problem3.cjs")
function problem6(){
    getBoard("mcu453ed" , (err , data)=>{
        if(err) return console.error(err);
        console.log(data);
        const boardID = data.id;
        getList(boardID , (err , data)=>{
            if(err) return console.error(err);
            console.log(data);
            
            //getting card for all
            const listID = data.map((val)=> val.id);

            listID.forEach((id)=>{
                getCards(id , (err , data)=>{
                    if(err) return console.error(err);
                    console.log(data);
                });
            });
        });
    });
}

module.exports  = problem6;