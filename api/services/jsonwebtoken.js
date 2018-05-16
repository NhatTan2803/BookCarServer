var jwt = require('jsonwebtoken');
var key = 'adsfnerjghkerhjgndfskrjknvsd';
module.exports ={
    encode: function (data) {
        return jwt.sign({
            phone: data,
        },key);
    },
    decode: function (token) {
        try {
            var decoded = jwt.verify(token,key);
            return decoded;
        } catch (err) {
            return false;
        }
    }
}