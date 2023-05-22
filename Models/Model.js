const mongoose = require('mongoose')
//create Model
const PersonModel =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        Type: Number,
    },
    favoriteFoods:{
        type:[String]
    }
})
module.exports= mongoose.model('Person', PersonModel)


   
