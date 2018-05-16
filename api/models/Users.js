/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
    },
    user_password: {
      type: 'string',
      size: 100,
    },
    user_idProfile:{
     type:'integer',
    },
    // user_name:{
    //   type: 'string',
    //   size:30,
    // },
    // user_email:{
    //   type:'string',
    //   size: 50,
    // },
    // user_avatar:{
    //   type:'string',
    //   size: 150,
    // }
  }
};

