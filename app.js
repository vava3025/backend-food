const express=require('express')
const morgan=require('morgan')
const app= new express()
app.use(morgan('dev'));
 
//adminRoutes
const adminRoutes=require('./routes/adminRoutes')
app.use('/admin', adminRoutes)
//donateRoutes
const donateRoutes=require('./routes/donateRoutes')
app.use('/donate', donateRoutes)
//collectionRoutes
const collectionRoutes=require('./routes/collectionRoutes')
app.use('/collection' , collectionRoutes)

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');



app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
})