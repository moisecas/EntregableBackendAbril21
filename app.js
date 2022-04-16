const express = require('express'); 
const app = express(); 

//definir el motor de plantillas
app.set('view enigme', 'ejs'); 

app.use('/', require('./router')) //traemos al rederizado a router.js 

// app.get('/',(req,res)=>{ //para enviar una rta al cliente
//     res.send('saludos')
// }) 



app.listen(5000, ()=>{ //servedidor oyendo, recibe el puerto y un arrow function 
    console.log('server corriendo en el puerto 5000')
}); 

