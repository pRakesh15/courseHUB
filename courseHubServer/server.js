import app from "./app.js";


app.listen(process.env.PORT,()=>
{
    console.log(`server start at port ${process.env.PORT}`)
})