const express= require('express')
const Person =require("../Models/Model")
const { createPerson, addManyPerson, findPerson, findOnePerson, findpersonById,updateperson, updateThisPerson, deletePerson, deleteManyPerson, querychain } = require('../Controllers/PersonController')
const router= express.Router()
//Create and Save a Record of a Model:
router.post("/addPerson", createPerson)
module.exports=router
//Create Many Records with model.create
router.get('/addManyperson', addManyPerson)
//Use model.find() to Search Your Database
router.get('/findPerson', findPerson)
//Use model.findOne() to Return a Single Matching Document from Your Database
router.get('/findonePerson/:Food', findOnePerson)
//Use model.findById() to Search Your Database By _id
router.get('/findPersonById/:id', findpersonById)
//Perform Classic Updates by Running Find, Edit, then Save
router.put('/updateperson/:id', updateperson)
//Perform New Updates on a Document Using model.findOneAndUpdate()
router.put('/updatethisperson/:personName',updateThisPerson)
//Delete One Document Using model.findByIdAndRemove
router.delete('/deleteperson/:id', deletePerson)
//MongoDB and Mongoose - Delete Many Documents with model.remove()
router.delete('/deletePersons', deleteManyPerson)
//Chain Search Query Helpers to Narrow Search Results
router.get('/queryChain',querychain)