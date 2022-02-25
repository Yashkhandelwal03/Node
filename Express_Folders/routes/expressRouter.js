const express = require('express');
const router = express.Router();


let {people} = require('../details');


router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people});
})

router.post('/api/postman/people',(req,res)=>{
    const name  = req.body;
    console.log(req.body);
    if(!name) {
        return res.status(400).json({ success:"false", message:"Please send a valid name"})
    }
    res.status(201).json({ success:"true", data:[...people,name]})
})

router.put('/:id',(req,res) =>{
    const { id } = req.params
    const { name } = req.body
    // console.log(req.body);
    const person = people.find((person)=> person.id === Number(id))
    if(!person) {
        return res.status(400).json({ success:"false", message:`No Person with id:${id}`})
    }
    const newPeople = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople});
})

router.delete('/:id',(req,res) =>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person) {
        return res.status(400).json({ success:"false", message:`No Person with id:${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    res.status(200).json({ success:true,data:newPeople})
})

module.exports = router;

