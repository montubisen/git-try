const express=require('express')
const app=express()
const info=[{},{
    id:1,
    title:'montu',
    from:'keshkal',
    branch:'IT'
},{
    id:2,
    title:'prashant',
    from:'bhulandshar',
    branch:'IT'
},{
    id:3,
    title:'navneet',
    from:'meerut',
    branch:'IT'
}]
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    const blogId=req.query.blog;
    const k=info[blogId]
    res.render('index',{info,k})
})
app.listen(3000,()=>{
    console.log('connected')
})