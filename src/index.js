const app = require('./app');
const port = process.env.PORT;
const winners = require('./function/winners');
//test for bid winners
// const bids = [
//   {
//     _id: '5e8763db757b4a4f90627b6c',
//     petId: '5e875de9757b4a4f90627b64',
//     owner: '5e875ca053a47d5330c81af8',
//     amount: 500,
//     userId: '5e876343757b4a4f90627b6a',
//     username:'mohamed'
//   },
//   {
//     _id: '5e8760e4757b4a4f90627b68',
//     owner: '5e875ca053a47d5330c81af8',
//     petId: '5e875de9757b4a4f90627b64',
//     amount: 300,
//     userId: '5e875eec757b4a4f90627b66',
//     username:'ahmed'
//   },
//   {
//     _id: '5e8763db757b4a4f90627b6c',
//     petId: '5e875de9757b4a4f90627b64',
//     owner: '5e875ca053a47d5330c81af8',
//     amount: 200,
//     userId: '5e876343757b4a4f90627b6a',
//     username:'salem'
//   }
// ];

// console.log(winners(bids, 1));

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
