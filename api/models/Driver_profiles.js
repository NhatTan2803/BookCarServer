/**
 * Driver_profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    drive_id:{
      type:'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    drive_name:{
      type:'string',
      size: 30,
    },
    drive_gender:{
      type:'string',
      enum:['male','female']
    },
    drive_age:{
      type:'integer',
    },
    drive_license:{
      type:'string',
      size: 30,
    },
    drive_image:{
      type:'string',
      size:30,
    },
    drive_car_image:{
      type:'string',
      size:30,
    }
  }
};

