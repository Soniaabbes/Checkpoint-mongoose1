const Person= require("../Models/Model")
exports.createPerson=async(req,res)=>{
    const {name, age, favoriteFood}=req.body
    try { const person = new Person ({name,age,favoriteFood})
await person.save()
res.status(201).send({msg:'person is created', person})
        
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }
}
exports.addManyPerson=async(req,res)=>{
    try {const persons=
        await Person.create([
        {
            name:'sonia',age:22, favoriteFoods:['Pizza']
        },{
            name:'Mary',age:25, favoriteFoods:['Pizza']
        }
    ]);
    
     res.status(201).send({msg:'persons are created', persons})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
}
exports.findPerson=async(req,res)=>{
    try {
        const findPerson= await Person.find();
        res.status(201).send({msg:'persons are:', findPerson})
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
    }
}
exports.findOnePerson= async(req,res)=>{
    const {Food}=req.params
    try {
        const findOnePerson= await Person.findOne({favoriteFoods:Food})
        if (!findOnePerson){ return res.status(400).send('no person')}
        res.status(201).send({msg:'person exists', findOnePerson})
    } catch (error) {
        
        res.status(500).send({msg:'there is an error'})
    }
}
exports. findpersonById=async(req,res)=>{
    const {id}=req.params;
    try {
        const findpersonbyId=await Person.findById({_id:id})
        res.status(201).send({msg:'the person exists', findpersonbyId})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
    }
}
exports. updateperson=async(req,res)=>{
   const {id}= req.params ;
   try {
    const person= await Person.findById({_id:id});
    if (person===false){ return res.status(400).send('there is no person')}


    person.favoriteFoods .push( "hamburger" )
    person.save()
    res.status(201).send({msg: 'person is updated',person })}
    

    catch (error) {
    res.status(500).send({msg:'there is an error'})
    
   }
}
exports.updateThisPerson= async(req,res)=>{
    const {personName}=req.params
    try {
        const personUpdate= await Person.findOneAndUpdate({name:personName},{age:20},{new:true})
        res.status(201).send({msg:'person is updating',personUpdate})
    } catch (error) {
       res.status(500).send({msg:'there is an error'}) 
    }
}
exports.deletePerson=async(req,res)=>{
    const {id}=req.params;
    try {await Person.findByIdAndDelete(id)
        res.status(201).send({msg:'person is deleted'})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
    }
}
exports.deleteManyPerson= async(req,res)=>{
    try {
        Person.remove(({ name:'Mary' }), function (err) {
            if (err){
                console.log(err)
            }
            else{
                console.log(" person is deleted");
            }
         });
        res.status(201).send({msg:'persons are deleted'})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
   

}
exports.querychain=async(req,res)=>{
    foodToSearch = "burrito";
    
    try {const people = Person.find({favoriteFoods: foodToSearch}).sort({name: 1})
    .limit(2)
    .select({age: 0})
    .exec()
   
    res.status(201).send({msg:'people who like burritto', people})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
    }
    
  }


