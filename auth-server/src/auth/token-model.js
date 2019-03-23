'use strict';

const mongoose = require('mongoose');

const tokens = new mongoose.Schema({
    string: {type:String, required:true, unique:true},
});

tokens.statics.check = function(token){
    let query = {string:token};
    tokens.deleteOne(query, function(err, obj){
        if (err) {
            return err;
        }else{
            return true;
        }
    });
};

module.exports = mongoose.model('tokens', tokens);
