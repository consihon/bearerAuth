'use strict';

const mongoose = require('mongoose');

const tokens = new mongoose.Schema({
    string: {type:String, required:true, unique:true},
});

tokens.statics.check = function(token){
    console.log('check', token);

    let query = {string:token};
    let find = this.find(query).count() > 0 ? true : false;
    console.log('find', find);
    if(find) {
        find.remove().exec();
        return true;
    } else {
        return false;
    }


};

module.exports = mongoose.model('tokens', tokens);
