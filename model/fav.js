const mongoose=require('mongoose')

const favSchema=new mongoose.Schema({
    movie:{
        type:String,
        required:true
    },
    gerne:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    },
    IMDb:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Favorite',favSchema)