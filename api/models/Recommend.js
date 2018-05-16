/**
 * Recommend.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    re_id:{
      type:'integer',
      primaryKey: true,
      autoIncrement:true,
    },
    re_drive_id:{
      type:'integer'
    },
    re_recommended_id:{
      type:'integer',
    }
  }
};

