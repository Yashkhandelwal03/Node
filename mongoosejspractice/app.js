const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/harigopal").then(() =>{console.log("Connected to database")}).catch((err) =>{console.log(err)});

// Creating the schema

const newPlaylist = new mongoose.Schema({
    name : {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    played : Number,
    singer : String,
    views : Number,
    date : {
        type : Date,
        date : Date.now,
    }
})

//Creating model
const Playlist = new mongoose.model("Playlist",newPlaylist);

//Adding documents
const createDocument = async () =>{
    try {
        const dilbarPlaylist = new Playlist({
            name : "Dil lauta diya hai",
            played : 350,
            singer : "Jubin Nautiyal",
            views : 250000
        })
        const hoonNa = new Playlist({
            name : "Pagalpanti",
            played : 320,
            singer : "Arijit Singh",
            views : 250000
        })
        const kabhiNahi = new Playlist({
            name : "Pagalpanti",
            played : 320,
            singer : "Arijit Singh",
            views : 250000
        })
        const result = await Playlist.insertMany([dilbarPlaylist,hoonNa,kabhiNahi]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const createDocument1 = async () =>{
    try {
        const res = new Playlist({
            name : "                Deewana         pagal       hai         ",
            played : 200,
            singer : "Arijit singh",
            email: "kamko@gmail.co",
            views : 2000
        })
        const result = await Playlist.insertMany([res]);
        // const result = await Playlist.insertOne({res});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
createDocument1();

//Reading Documents greater than nad less than

// const readingDocument = async () =>{
//     const doc = await Playlist.find({played: { $gt : 300}})
//     .select({name:1})
//     // .limit(1);
//     console.log(doc);
// }


//Logical Operators
const readingDocument = async () =>{
    const doc = await Playlist.find({$and : [{name: "Pagalpanti"},{views: 250000}]})
    .select({name:1})
    // .limit(1);
    console.log(doc);
}

// readingDocument();