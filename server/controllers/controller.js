const mongoose = require('mongoose');
const Item = mongoose.model('Item')

module.exports = {
    // add: function (req, res) {
    //     console.log(req.body)
    //     var item = new Item(req.body)
    //     item.save(function (err) {
    //         if (err) {
    //             console.log('somethig went worng');
    //             res.json({ Status: false, Error: err })
    //         } else {
    //             console.log('successfully added');
    //             res.json({ Status: true, message: "Success" })
    //         }
    //     })
    // },
    // get: function (req, res) {
    //     Item.find({}, function (err, items) {
    //         if (err) {
    //             console.log("Returned error", err);
    //             res.json({ message: "Error", error: err })
    //         }
    //         else {
    //             res.json({ data: items })
    //         }
    //     })
    // },
    // delete: function (req, res) {
    //     console.log(req.params.id)
    //     Item.findByIdAndRemove({ _id: req.params.id }, function (err) {
    //         if (err) {
    //             console.log('somethig went worng');
    //             res.json({ message: "Error", error: err })
    //         } else {
    //             console.log('successfully adopted this pet');
    //             res.json({ message: "Success delete" });
    //         }
    //     })
    // },
    // update: function (request, response) {
    //     console.log(request.body)
    //     Item.findByIdAndUpdate({ _id: request.body._id }, { $set: request.body }, { runValidators: true }, function (err, item) {
    //         if (err) {
    //             console.log('somethig went worng');
    //             response.json({ Status: false, Error: err })
    //         } else {
    //             console.log('successfully updated a user', item);
    //             response.json({ Status: true, message: "Success" });
    //         }

    //     })
    // },

    // show: function (req, res) {
    //     console.log(req.params)
    //     Item.findOne({ _id: req.params.id }, function (err, item) {
    //         // var data = pet;
    //         if (err) {
    //             console.log('somethig went worng');
    //             res.json({ message: "Error", error: err })
    //         } else {
    //             // console.log(data);
    //             res.json({ message: "Success", data: item });
    //         }

    //     })
    // }

}