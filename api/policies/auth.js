var jwt = require('../services/jsonwebtoken');
module.exports = function (req, res, next) {
    if (req.headers.token && req.headers.token != '') {
        var decoded = jwt.decode(req.headers.token);
        if(decoded.phone)
        {
            req.headers.authPhone = decoded.phone;
            return next();
        }
        if(decoded === false)
        {
            return res.json({
                status:'error',
                message: 'token khong hop le',
                isAuth: false,
            });
        }
    }
    else{
        return res.json({
            status:'error',
            message:'Bạn không đủ quyền truy cập',
            isAuth: false,
        })
    }
}