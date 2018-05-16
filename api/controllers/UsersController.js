/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('../services/jsonwebtoken');
module.exports = {
    user_login: function (req, res) {

        var user_phone = req.param('user_phone')
        user_password = req.param('user_password');
        if (!user_phone || user_phone === '') {
            return res.json({
                status: 'error',
                message: 'SĐT của bạn chưa được nhập'
            });
        }
        if (!user_password || user_password === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập mật khẩu'
            });
        }
        Users.findOne({ user_phone: user_phone }).exec(function (err, found) {
            if (err) { console.log('Bị lỗi') }
            if (found) {
                Users.comparePassword(user_password, found, function (err, valid) {
                    if (err) {
                        return res.json({
                            status: 'error',
                            message: 'Lỗi'
                        })
                    }
                    else {
                        if (valid) {
                            Driver_profiles.findOne({ drive_id: found.user_info_id }).exec(function (err, foundDriver) {
                                if (foundDriver) {
                                    return res.json({
                                        status: 'driver',
                                        message: 'success',
                                        token: jwt.encode(found.user_phone),
                                        user: found,
                                    })
                                } else {
                                    return res.json({
                                        status: 'customer',
                                        message: 'success',
                                        token: jwt.encode(found.user_phone),
                                        user: found,
                                    })
                                }
                            })
                        }
                        else {
                            if (!valid) {
                                return res.json({
                                    status: 'error',
                                    message: 'Tài khoản không tồn tại'
                                })
                            }
                        }
                    }
                })
            }
        })
    },
};

