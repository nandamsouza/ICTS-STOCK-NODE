const CSVToJSON = require('csvtojson')
const path = require('path')
const Item = require('../models/item')

exports.post = async (req, res, next) => {
    let items = []
    await CSVToJSON().fromString(req.files.file.data.toString())
    .then(res => {
        items = res
    }).catch(err => {
        // log error if any
        console.log(err);
    })    
    await Item.bulkCreate(items)

    res.status(201).send(items)
};

exports.get = async (req, res, next) => {
    const policy = await Item.findAll()
    res.status(201).send(policy);
};