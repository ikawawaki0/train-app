const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
    Product.find()
    // const session = await Product.startSession();
    // Product.startSession().then(foundProducts => {res.json(foundProducts)})
    // Product.startSession(function(err, foundProducts) {
    //     res.json(foundProducts)
    // })
    // res.json({'ok': true})
})

module.exports = router