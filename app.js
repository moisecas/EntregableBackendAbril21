//acá tambien puedo mandar rutas que no esten en ./router.js 

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 

///////

const http = require('http')  //creación del server 
const server = http.createServer(app)//le pasamos app

const {Server} = require('socket.io') //requerimos a socket.io
const io = new Server(server)   //creamos una instancia, Server de io y server de http

io.on('connection', (socket)=>{ //escuchamos el evento connection, hay varios metodos 
       //console.log('un usuario se ha conectado')

    //     socket.on('disconnect', ()=>{
    //         console.log('un usuario se desconectó')  
    //     })
        // socket.on('chat',(msg)=>{
        //     console.log('mensaje:' + msg) 
        // })

        socket.on('chat', (msg)=>{ //usamos chat mensaje, al chat le pasamos ese mensaje 
            io.emit('chat', msg) 
        })
}) 

//////

//definir el motor de plantillas
app.set('view enigme', 'ejs'); 

//app.use('/', require('./router')) //traemos al rederizado de router.js 

  //creamos una instancia, Server de io y server de http

app.get('/contacto',(req,res)=>{
    res.render('contacto.ejs')
})  

app.get('/',(req,res)=>{
    res.render('index.ejs')   
}) 

app.get('/chat',(req,res)=>{
    res.render('chat.ejs')
}) 

server.listen(5000, ()=>{ //servedidor oyendo, recibe el puerto y un arrow function 
    console.log('server corriendo en el puerto 5000')
}); 

app.get('/test', (req,res)=> { //enviando una rta a una ruta en json 
    res.status(200).send({ //status 200 rta exitosa  
        message: "mensaje desde node" 
    })
})

app.post('/post', urlencodedParser, function (req, res) {  
    
    response = {  
        id:req.body.id,  
        producto:req.body.producto,
        price:req.body.price, 
        thumbnail:req.body.thumbnail   
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 })  


app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 

module.exports= app 