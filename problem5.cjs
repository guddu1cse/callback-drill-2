/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

const {getBoard} = require("./problem1.cjs")
const {getList} = require("./problem2.cjs")
const {getCards} = require("./problem3.cjs")
function problem5(){
    getBoard("mcu453ed" , (err , data)=>{
        if(err) return console.error(err);
        console.log(data);
        const boardID = data.id;
        getList(boardID , (err , data)=>{
            if(err) return console.error(err);
            console.log(data);
            
            //getting card for mind and space
            const listID = data.filter((val)=> val.name == "Mind" || val.name == "Space")
            .map((val)=> val.id);

            listID.forEach((id)=>{
                getCards(id , (err , data)=>{
                    if(err) return console.error(err);
                    console.log(data);
                });
            });
        });
    })
}

module.exports  = problem5;