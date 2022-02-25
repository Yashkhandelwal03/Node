const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://localhost:27017/yash")
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Error Detected"));

//Creation of Schema
//defines the structure of document,default values,validators etc

const subjectList = new mongoose.Schema({
  name: {
    type: String,
    required: true,

    //Changing the schema
    lowercase:true,
    trim:true,
    minlength:2,
  },
  type: String,
  chapters: {
    type: Number,
    validate(value){
      if(value<0){
        throw new Error("value cannot be less than 0");
      }
    }
  },
  author: String,
  active: Boolean,
  email:{
    type:String,
    required:true,
    validate(value){
      if (validator.isEmail(value)){
        throw new Error("Invalid Email");
      }
    }
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Defination of Models
const Subject = new mongoose.model("Subject", subjectList);

//Creation of Document
const newSubject = async () => {
  try {
    // const express = new Subject({
    //   name: "Express JS",
    //   type: "Back-End",
    //   chapters: 35,
    //   author: "Thapa-Technical",
    //   active: true,
    // });

    // const mongo = new Subject({
    //     name: "MongoDB",
    //     type: "DataBase",
    //     chapters: 5,
    //     author: "Thapa-Technical",
    //     active: true,
    // });
      
    const mongoose = new Subject({
        name: "   Mongoose JS",
        type: "Database",
        chapters: 5,
        author: "Thapa-Technical",
        email: "K@3",
        active: true,
    });

    //Because react.save() takes time so we use async-await instead of simply promises
    //react.save() : For inserting only single data 
    // const result = await Subject.insertMany([express,mongo,mongoose]);
    const result = await mongoose.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

newSubject();


//Reading the data from collections

const getData = async ()=>{
    const res = await Subject
                .find({chapters: {$gt: 20}})
                .select({name: 1});
    console.log(res);
}

// getData();


//Updating the data

const updateData = async (id) => {
  const res = await Subject.updateOne({_id: id},{
    $set : {
      chapters: 20
    }
  })
  console.log(res);
}

// updateData("616ae2ebd0e8c48f63b4db68");


//Deleting the data
const deleteData = async (id) => {
  const res = await Subject.deleteOne({_id: id})
  console.log(res);
}

// deleteData("616aeeb980929c6b291ccc7d")