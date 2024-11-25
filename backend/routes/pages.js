const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("<head><title>Server Running ...</title></head><h1 style='font-size: 75px;'>Server Running ...</h1>")
})

router.get('/admin', (req, res)=>{
    res.send("<h1 style='font-size: 75px;'>Welcome Admin</h1>")
})

module.exports = router;