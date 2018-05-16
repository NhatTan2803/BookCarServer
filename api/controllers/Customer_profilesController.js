/**
 * Customer_prfilesController
 *
 * @description :: Server-side logic for managing customer_prfiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    cus_create: function (req, res) {
        var
        user_phone = req.param('user_phone')
        user_password = req.param('user_password')
        cus_name = req.param('cus_name');

        Users.findOne({ user_phone: user_phone }).exec(function (err, found) {
            if (err) { return console.log('Lỗi Server') }
            if (found) {
                return res.json({
                    status: 'error',
                    message: 'Phone đã tồn tại '
                });
            } else {
                Customer_profiles.create({
                    cus_name
                }).exec(function (err, created) {
                    if (err) { return console.log('loi ne') }
                    if (created) {
                        Users.create({
                            user_phone,
                            user_password,
                            user_info_id: created.cus_id,
                        }).exec(function (err, createdUser) {
                            if (err) { return console.log('khong tao duoc user') }
                            if (createdUser) {
                                return res.json({
                                    status: 'success',
                                    message: 'Tạo tài khoản khách hàng thành công'
                                });
                            }
                        })


                    }
                });
            }
        });
    }
};

