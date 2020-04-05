const express = require('express');
const Bid = require('../models/bid');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/bids', auth, async (req, res) => {
  //body contain owner_id,petId,amount of bid and we concat userID who make the bid
  const bid = new Bid({
    ...req.body,
    userId: req.user._id
  });

  try {
    await bid.save();
    res.status(201).send(bid);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/bids', auth, async (req, res) => {
  try {
    //get all bids for this user for this pet.In case each user has many pets
    const match = {};
    match.petId = req.body.petId;
    const sort = {};
    sort['amount'] = -1;
    await req.user
      .populate({
        path: 'bids',
        match,
        options: {
          sort
        }
      })
      .execPopulate();
    res.send(req.user.bids);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
