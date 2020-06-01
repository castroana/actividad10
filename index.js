const mongoose = require("mongoose");
const app = require("./app");

const port = 3001;

const URI = "mongodb://localhost:27017/registroEstudiantes";

mongoose.connect(URI, (err, res) =>{
    if(err){
        console.log(`El error es: ${err}`);
    }else{
        console.log("conexión Exitosa!!");
        app.listen(port, ()=>{
            console.log(`Puerto: ${port}`);
        })
    }
})      