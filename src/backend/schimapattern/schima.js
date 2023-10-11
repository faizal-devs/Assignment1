const mongoose = require('mongoose');

const myschima = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    sources:{
        type:[]
    },

    city:{
        type:String
    },
    state:{
        type:String
    },
    pass:{
        type:String
    }

});

const mypattern = new mongoose.model("students",myschima);
module.exports = mypattern;