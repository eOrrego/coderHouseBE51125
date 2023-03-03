import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    console.log(req.query);
    const {limite, orden} = req.query
    console.log(limite,orden);
    // req.params - req.query - req.body
    //console.log(req);
    res.send('Hola con express')
})

app.get('/productos/:id',(req,res)=>{
    console.log(req.params);
    res.send('Hola productos')
})

app.get('/usuarios',(req,res)=>{
    res.send('Hola usuarios')
})


app.listen(8080,()=>{
    console.log('Escuchando puerto 8080');
})