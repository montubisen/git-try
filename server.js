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
    branch:'eee'
},{
    id:3,
    title:'navneet',
    from:'meerut',
    branch:'IT'
}]

const PORT=process.env.PORT ||3000

app.set('view engine','hbs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    const blogId=req.query.blog;
    const k=info[blogId]
    res.render('index',{info,k})
})
app.listen(PORT,()=>{
    console.log('connected')
})