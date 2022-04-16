//acá en router.js, archivo que esta afuera de las carpetas, junto a app.js y node modules y el package, se definen las rutas del server

const express = require('express'); 
const router = express.Router(); 
const productos = [
    {
        id: 1,
        price: 10,
        thumbnail: "url1.com" 

    },
]



router.get('/contacto',(req,res)=>{
    res.render('contacto.ejs')
}) 

router.get('/',(req,res)=>{
    res.render('index.ejs')   
}) 

router.get('/producto', (req, res) => {
    res.render('create.ejs')        
})

router.get('/productos', (req, res) => {
    res.json(productos);   
});

router.get('/ejs', (req, res) => {
    res.render('ejs.ejs')          
})



module.exports=router 