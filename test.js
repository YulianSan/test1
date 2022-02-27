const http = require("http");
const porta = 3000;
const servidor = http.createServer(
    (req,res)=>{
        res.write("Hello World")
        console.log(porta)
        res.end();
    }  
).listen(porta,()=>{console.log("Servidor rodando")})