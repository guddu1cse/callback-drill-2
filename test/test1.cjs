const {getBoard} = require("../problem1.cjs");

setTimeout(()=>{

    getBoard("mcu453ed" , (err , data)=>{
        if(err) {
            console.log(err);
            return err;
        }
        console.log(data);
        return data;
    });

} , 2000);