const {getList} = require("../problem2.cjs");

setTimeout(()=>{

    getList("abc122dc" , (err , data)=>{
        if(err) {
            console.log(err);
            return ;
        }
        console.log(data);
    });

} ,2000);