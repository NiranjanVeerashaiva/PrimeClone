const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const path=require('path')
const PORT=3001

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.static(path.join(__dirname,'./frontend/build')))




const User=require('./model/user')
const Movie=require('./model/movie')
const Favorite=require('./model/fav')

const dbURL="mongodb+srv://Niranjan:Niranjan1813@cluster0.ewxnxvc.mongodb.net/Prime?retryWrites=true&w=majority"
//const dbURL="mongodb://localhost:27017/Prime"
mongoose.connect(dbURL).then(()=>{
    console.log("connected to database");
})



app.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            res.send({message:"user already existed"})
        }
        else{
            const data=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            data.save().then(()=>{
                res.send({message:"user added successfull"})
            }).catch((err)=>{
                res.send({message:"failed to add user"})
            })
        }
    })
})

app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            res.send({message:"login successfull",status:200})
        }
        else{
            res.send({message:"user id or password wrong"})
        }
        
    })
})


app.post('/addMovie',(req,res)=>{
    let data=new Movie({
        movie:req.body.movie,
        gerne:req.body.gerne,
        imageURL:req.body.imageURL,
        year:req.body.year,
        time:req.body.time,
        quality:req.body.quality,
        IMDb:req.body.IMDb,
        description:req.body.description
    })
    data.save().then(()=>{
        res.send({message:"movie added sucessfull"})
    }).catch((err)=>{
        res.send({message:"cannot add movie"})
    })

})

app.post('/favMovie',(req,res)=>{
    let data=new Favorite({
        movie:req.body.movie,
        gerne:req.body.gerne,
        imageURL:req.body.imageURL,
        year:req.body.year,
        time:req.body.time,
        quality:req.body.quality,
        IMDb:req.body.IMDb,
        description:req.body.description
    })
    data.save().then(()=>{
        res.send({message:"movie added to favorites"})
    }).catch((err)=>{
        res.send({message:"cannot add movie"})
    })
})

app.get('/favorite',async(req,res)=>{
    try {
        let data=await Favorite.find()
        res.json(data)
    } catch (error) {
        console.log("error");
    }
})



app.get('/movie',async(req,res)=>{
    try {
        let data=await Movie.find()
        res.json(data)
    } catch (error) {
        console.log("error");
    }
})

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})

app.listen(PORT,()=>{
    console.log("connected to port 3001");
})
