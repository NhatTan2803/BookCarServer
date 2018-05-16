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
                            return res.json({
                                status: 'success',
                                message: 'Đăng nhập thành công',
                                token: jwt.encode(found.user_phone),
                                user: found,
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
    // user_create: function (req, res) {
    //     var user_phone = req.param('user_phone')
    //     user_password = req.param('user_password');
    //     user_idProfile = req.param('user_idProfile');

    //     Users.findOne({ user_phone: user_phone }).exec(function (err, found) {
    //         if (err) { return console.log('Lỗi Server') }
    //         if (found) {
    //             return res.json({
    //                 status: 'error',
    //                 message: 'Email đã tồn tại '
    //             });
    //         } else {
    //             Users.create({
    //                 user_phone,
    //                 user_password,
    //                 user_idProfile
    //             }).exec(function (err, created) {
    //                 if (err) { return console.log('loi ne') }
    //                 if (created) {
    //                     // return res.json({
    //                     //     status: 'success',
    //                     //     message: 'Tạo tài khoản thành công'
    //                     // });
    //                     console.log(created)
    //                     if(created.user_idProfile)
    //                 }
    //             });
    //         }
    //     });
    // }
};

