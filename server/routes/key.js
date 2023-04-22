const express = require("express");
const router = express.Router();
const {Key} = require("../models")

router.get('/', async (req, res) => {
    const listOfKey = await Key.findAll();
    res.json(listOfKey);    
})

router.post('/', async (req, res) => {
    const key = req.body;
    await Key.create(key);
    res.json(key);
})

module.exports = router;