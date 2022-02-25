const express = require('express');
const app = express();
const people = require("./routes/expressRouter");
// let {people} = require('./details');

//Used to parse the incoming data
app.use(express.urlencoded({ extended:false}))

//Used for parsing json data
app.use(express.json())

app.use('/api/people',people)


//Get method
// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people});
// })

// app.post('/api/postman/people',(req,res)=>{
//     const name  = req.body;
//     console.log(req.body);
//     if(!name) {
//         return res.status(400).json({ success:"false", message:"Please send a valid name"})
//     }
//     res.status(201).json({ success:"true", data:{...people,name}})
// })

// app.put('/api/people/:id',(req,res) =>{
//     const { id } = req.params
//     const { name } = req.body
//     // console.log(req.body);
//     const person = people.find((person)=> person.id === Number(id))
//     if(!person) {
//         return res.status(400).json({ success:"false", message:`No Person with id:${id}`})
//     }
//     const newPeople = people.map((person) =>{
//         if(person.id === Number(id)){
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({success:true,data:newPeople});
// })

// app.delete('/api/people/:id',(req,res) =>{
//     const person = people.find((person)=> person.id === Number(req.params.id))
//     if(!person) {
//         return res.status(400).json({ success:"false", message:`No Person with id:${req.params.id}`})
//     }
//     const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
//     res.status(200).json({ success:true,data:newPeople})
// })


app.listen(5000,()=>{
    console.log("listening at 5000....")
})