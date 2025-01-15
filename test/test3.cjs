const {getCards} = require("../problem3.cjs");

setTimeout(()=>{

    getCards("qwsa221" , (err , data)=>{
        if(err) {
            console.log(err);
            return ;
        }
        console.log(data);
    });

} , 2000);