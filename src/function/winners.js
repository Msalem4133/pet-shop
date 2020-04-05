const User = require('../models/user');
const getWinners = (allBids, items) => {
  // Algorithm runs in nlogn
  if (allBids.length === 0) return 'No Winners';
  const res = [];
  var myMap = new Map();//to memoize
  allBids.sort((a, b) => {
    if (b.amount == a.amount) {
      if (a.username < b.username) {
        return -1;
      }
      if (a.username > b.username) {
        return 1;
      }
    }
    return b.amount - a.amount;
  });
  for (var i = 0; i < allBids.length; i++) {
    if (items > 0) {
      items--;
      if (myMap.get(allBids[i].amount) == undefined) {
        myMap.set(allBids[i].amount, allBids[i].amount);
        for (var j = i + 1; j < allBids.length; j++) {
          if (allBids[j].amount != allBids[j - 1].amount) {
            myMap.set(allBids[i].amount, allBids[j].amount);
            break;
          }
        }
      }
      res.push({
        user: allBids[i].username,
        pay: myMap.get(allBids[i].amount)
      });
    } else {
      res.push({
        user: allBids[i].username,
        pay: 'lost'
      });
    }
  }
  console.log(myMap);
  return res;
};
module.exports = getWinners;
