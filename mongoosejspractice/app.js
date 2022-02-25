const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/harigopal").then(() =>{console.log("Connected to database")}).catch((err) =>{console.log(err)});

// Creating the schema

const newPlaylist = new mongoose.Schema({
    name : String,
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

createDocument();