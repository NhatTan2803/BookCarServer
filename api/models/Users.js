/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcryptjs');
module.exports = {

  attributes: {
    user_id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    user_phone: {
      type: 'string',
      size: 15,
      unique: true,
    },
    user_password: {
      type: 'string',
      size: 100,
    },
    user_info_id:{
     type:'integer',
    },
    user_type:{
      type:'string',
      enum:['driver','customer']
    }
  },
  beforeCreate: function(user, cb){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.user_password, salt, function (err, hash) {
        if (err) {
          return cb(err);
        }
        if (hash) {
          user.user_password = hash;
          return cb(null, user);
        }
      });
    });
  },
  comparePassword: function (password,user,cb) {
    bcrypt.compare(password,user.user_password,function (err,match) {
      if(err){
        return cb(err);
      }
      if(match){
        return cb(null,true);
      }else{
        return cb(null,false);
      }
    });
  }
};

