//acá en router.js, archivo que esta afuera de las carpetas, junto a app.js y node modules y el package, se definen las rutas del server

const express = require('express'); 
const { response } = require('./app');
const router = express.Router(); 



router.get('/chat',(req,res)=>{
    res.render('chat.ejs')
}) 


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
    res.json(response);   
});

router.get('/ejs', (req, res) => {
    res.render('ejs.ejs')          
})
router.get('/post', (req, res) => {
    res.render('edit.ejs')           
})





module.exports=router 