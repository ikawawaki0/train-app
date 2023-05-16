const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async (req, res) => {
    const products = await Product.find()
    res.json(products) 
    // Product.find({}, function(err, foundProducts) {
    //     res.json(foundProducts)
    // })
    // const session = await Product.startSession();
    // Product.startSession().then(foundProducts => {res.json(foundProducts)})
    // Product.startSession(function(err, foundProducts) {
    //     res.json(foundProducts)
    // })
    // res.json({'ok': true})
})

router.get('/:productId', async (req, res) => {
    const productId = req.params.productId
    const product = await Product.findById(productId)
    res.json(product) 
})

module.exports = router