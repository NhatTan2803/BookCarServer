/**
 * Driver_profileController
 *
 * @description :: Server-side logic for managing driver_profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    drive_create: function (req, res) {
        var
            user_phone = req.param('user_phone')
        user_password = req.param('user_password');
        drive_name = req.param('drive_name')
        drive_gender = req.param('drive_gender')
        drive_age = req.param('drive_age')
        drive_license = req.param('drive_license')
        drive_image = req.param('drive_image')
        drive_car_image = req.param('drive_car_image');

        Users.findOne({ user_phone: user_phone }).exec(function (err, found) {
            if (err) { return console.log('Lỗi Server') }
            if (found) {
                return res.json({
                    status: 'error',
                    message: 'Phone đã tồn tại '
                });
            } else {
                Driver_profiles.create({
                    drive_name
                }).exec(function (err, created) {
                    if (err) { return console.log('loi ne') }
                    if (created) {
                        Users.create({
                            user_phone,
                            user_password,
                            user_info_id: created.drive_id,
                        }).exec(function (err, createdUser) {
                            if (err) { return console.log('khong tao duoc user') }
                            if (createdUser) {
                                return res.json({
                                    status: 'success',
                                    message: 'Tạo tài khoản tài xế thành công'
                                });
                            }
                        })
                    }
                });
            }
        });
    },
    drive_request: function (req, res) {
        var req_dri_id = req.param('req_dri_id')
        //console.log('chp truyen xuong'+req.param('drink_shop_id'))
        Requests.find({ req_dri_id }).exec(function (err, find) {
            if (err) {
                return console.log(err)
            }
            if (find) {
                return res.json({
                    status: 'success',
                    requests: find,
                })
            }
        }, error => {
            console.log(error);
            return;
        })
    },
    drive_recommend: function (req, res) {
        var user_phone = req.param('user_phone');
        re_dri_id = req.param('user_id')
        Users.findOne({ user_phone: user_phone }).exec(function (err, found) {
            if (err) { return console.log('Phone not find') }
            if (found) {
                console.log(found)
                Driver_profiles.findOne({ drive_id: found.user_info_id }).exec(function (err, foundDriver) {
                    if (err) { return console.log('Phone not valiable') }
                    if (foundDriver) {
                        console.log(foundDriver)
                        Recommend.create({
                            re_dri_id,
                            re_recommended_id: found.user_id,
                        }).exec(function (err, created) {
                            if (err) {
                                return console.log('No Success')
                            }
                            if (created) {
                                return res.json({
                                    status: 'success',
                                    message: 'Added recommendation'
                                })
                            }
                        })
                    }
                })
            }
        })
    }
};
