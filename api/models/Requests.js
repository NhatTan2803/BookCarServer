/**
 * Requests.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    req_id: {
      type: 'integer',
      primaryKey: true,
      autoInrement: true,
    },
    req_cus_id: {
      type: 'integer'
    },
    req_dri_id: {
      type: 'integer'
    },
    req_to: {
      type: 'string',
      size: 30,
    },
    req_timePickUp: {
      type: 'date',
    },
    req_price: {
      type: 'decimal'
    },
    req_review: {
      type: 'string'
    },
    req_status: {
      type: 'string',
      size: 10,
      enum: ['open', 'booked', 'cancelled', 'completed', 'sharing'],
    }
  }
};

