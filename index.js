// console.log('hello');
// let fs= require('fs')
// fs.writeFileSync('index.html','hello')
// let data= fs.readFileSync('index.html')
// console.log(data.toString());
// fs.unlinkSync('index.html')
// const { log } = require('console')
//  let express= require('express')
//  let app=express()
// app.use((req,res,next)=>{
//     res.send('nhi jane dunga')
//     next()
// })
// app.use((req,res,next)=>{
//     // res.send('mai to bilkul jane nhi dungaa')
//     next()
// })
// let express= require('express')
//  let app=express()
// app.get('/',(req,res)=>{
//     res.send('hello mai hu kaun....server hehehe')

// })
// app.get('/search',(req,res)=>{
//     let {firstname,lastname}=req.query
//     res.send(`${firstname} ${lastname}`)
// })
// app.get('/:name',(req,res)=>{
//     let {name}=req.params
//     res.send(name)
// })
 

// app.get('about',(req,res)=>{
//    res.send('kyaa bhej duu')
//  })
// app.listen(4000,()=>{
//     console.log('server running on port no. 4000');
// })
let express =require('express')
let mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/BGIEM').then(()=>{
    console.log('chal gyaa....db');
    
}).catch((err)=>{
    console.log(err);
    
})
let app=express()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(4000,()=>{
         console.log('server running on port no. 4000');
 })
