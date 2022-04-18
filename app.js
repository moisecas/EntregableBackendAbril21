//acá tambien puedo mandar rutas que no esten en ./router.js 

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 

//definir el motor de plantillas
app.set('view enigme', 'ejs'); 

app.use('/', require('./router')) //traemos al rederizado de router.js 





app.listen(5000, ()=>{ //servedidor oyendo, recibe el puerto y un arrow function 
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