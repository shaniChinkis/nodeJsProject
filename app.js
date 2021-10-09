const express = require('express');
const db = require('./dbConnect')

const app=express();
const port =3016;
const userRouter=require("./routes/userRouter")
const categoryRoutes=require("./routes/categoryRoutes")
const orderRoutes=require("./routes/orderRoutes")
const productRoutes=require("./routes/productRoutes")

const path=require('path')

db.connect();
app.use(express.json());
app.use('/user', userRouter);
app.use('/category', categoryRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);

app.use(express.static('./static'));

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, '/static/404.html'));

})

app.use((err,req,res,next)=>{
    res.status(500).send('An Error!');
    console.log(err);
})

app.listen(port,()=>{
    console.log("app is running")
})