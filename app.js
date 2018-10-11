
'use strict';
//auth

 const express = require('express');
 var bodyParser = require('body-parser')
 const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('lets ,3333333 !s');
});

   //Demo wallet balances
    //2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW :: MERCHANT (temp) ////  / prlmhl94mpr74yuang0azmkyj8xknwr9gg7rtl58dj
    //2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC :: CONSUMER (michaelTest) //// pqtqqe7ztzxfj8yv7ys8m6464xd9755cv5nccg8e6z / prypsl76p0n2rzut7f59p8akmy3eqkn7qs954a3vy8 / pqprlhsyhp6uq0ap448q0tdu372nry48v587q28chr
    //2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU :: COMMUNITY (MiketBTC) //// pr6rrze6y6h5gfu9lh4s3d5n22h59jau8va5vv9p0c 
 // POST method route
app.post('/', function (req, res) {

  res.json(req.body)
  
  

  


})

var blocktrail = require('blocktrail-sdk');
  var client = blocktrail.BlocktrailSDK({apiKey: "3265829528aba9920420c411a67cdf8fe65a7dc4", apiSecret: "9414db25da6f25eddb2db69b5ea38fc0709b9503", network: "tBCH", testnet: true});
    
  client.initWallet("michaelTest", "Br!nk123", function(err, wallet) { 
    
    //Initiate transaction
        value = blocktrail.toSatoshi(0.0074);
        wallet.pay({'2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU' : value}, //sending to CONSUMER wallet
            function(err, result) {
                //console.log(result);
                //return result;
            });
    });


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