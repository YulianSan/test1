const http = require("http");
const porta = 3000;
const fs = require("fs")

const servidor = http.createServer(
    (req,res)=>{
        fs.readFile('fogo.html',(err,arq)=>{
            res.write(arq);
            return res.end();
        })
    
        
    }  
)
servidor.listen(porta,()=>{console.log("Servidor rodando")})
