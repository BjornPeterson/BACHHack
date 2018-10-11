//import { stringify } from 'querystring';

'use strict';
//auth
 const express = require('express');
 var bodyParser = require('body-parser')
 const app = express();
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('Valid');
});

   //Demo wallet balances
    //2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW :: MERCHANT (temp) ////  / prlmhl94mpr74yuang0azmkyj8xknwr9gg7rtl58dj
    //2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC :: CONSUMER (michaelTest) //// pqtqqe7ztzxfj8yv7ys8m6464xd9755cv5nccg8e6z / prypsl76p0n2rzut7f59p8akmy3eqkn7qs954a3vy8 / pqprlhsyhp6uq0ap448q0tdu372nry48v587q28chr
    //2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU :: COMMUNITY (MiketBTC) //// pr6rrze6y6h5gfu9lh4s3d5n22h59jau8va5vv9p0c 
    //1PGqXLQ5urNvKMchHLPLzBANPUiQrLg4mG :: COPAY (MiketBTC) ////  qr69rqh65suhq35zrwwg8kecls4q0m2g6vrdt4ec37
    
 // POST method route

app.post('/', function (req, res) {
  //let mike = 0;   
  if(req.body.data['confirmations'] === 0){
    
    //if(mike === 0){
    Pay()
    //mike = 1;}

    //var delayInMilliseconds = 180000; //180 second

    //setTimeout(function() {
      //mike = 0;
    //}, delayInMilliseconds);  

  }
  //res.status(200).send
  //res.send('Success 1')
  res.status(200).send('Valid')
 //res.json(req.body['addresses'])

})

function Pay() {

  //Authenticate
  var blocktrail = require('blocktrail-sdk');
  var client = blocktrail.BlocktrailSDK({apiKey: "3265829528aba9920420c411a67cdf8fe65a7dc4", apiSecret: "9414db25da6f25eddb2db69b5ea38fc0709b9503", network: "tBCH", testnet: true});
  let rebate = 0.0009999;
 
//helper functions
  function sat2BCH(amount){
     return(amount/100000000)
     }

     //Check for incoming transactions to MERCHANT wallet
client.initWallet("temp", "temp12345678", function(err, wallet) {
  //Store rebate amount
  wallet.transactions(function(err, result) {
  rebate = sat2BCH(result.data[0]['wallet_value_change']*0.1);

  client.initWallet("michaelTest", "Br!nk123", function(err, wallet) { 
    //Initiate transaction
        var value = blocktrail.toSatoshi(rebate);
        wallet.pay({'2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC' : value}, //sending to wallet
            function(err, result) {
                console.log(result);
                console.log(err);
                return result
            });
    });
});
})


  
}

 if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}
 module.exports = app;