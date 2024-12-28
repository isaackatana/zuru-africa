const express = require('express');
const router = express.Router();
const safaris = '../data/safaris.data';

router.get('/api/safaris', (req, res)=>{
    const previews = safaris.map(safari => (
        {
            id: safari.id,
            thumbnail: safari.thumbnail,
            name: safari.name,
            duration: safari.duration,
            price: safari.price,
            serviceCharge: safari.serviceCharge
        }
    ))
    
    res.json(previews);
})

module.exports = router;