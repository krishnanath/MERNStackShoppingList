const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @router GET api/items
// @desec Get All Items
// @access Public
router.get('/', (req,res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items));
});

// @router POST api/items
// @desec Create A item
// @access Public
router.post('/', (req,res) => {
   const newItem = new Item({
       name: req.body.name
   });

   newItem.save().then(item => res.json(item));
});


// @router DELETE api/items/:id
// @desec DELETE A Item
// @access Public
router.delete('/:id', (req,res) => {
Item.findById(req.params.id)
.then(item => item.remove().then(() =>res.json({success: true})))    
.catch(err => res.status(404).json({success: false}));

});
 
module.exports = router;
