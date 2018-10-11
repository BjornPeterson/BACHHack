
'use strict';
 const express = require('express');
 var bodyParser = require('body-parser')
 const app = express();
 //output hello world

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('hh, !s');
});
// [END hello_world]

   //Demo wallet balances
    //2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW :: MERCHANT (temp) ////  / prlmhl94mpr74yuang0azmkyj8xknwr9gg7rtl58dj
    //2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC :: CONSUMER (michaelTest) //// pqtqqe7ztzxfj8yv7ys8m6464xd9755cv5nccg8e6z / prypsl76p0n2rzut7f59p8akmy3eqkn7qs954a3vy8 / pqprlhsyhp6uq0ap448q0tdu372nry48v587q28chr
    //2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU :: COMMUNITY (MiketBTC) //// pr6rrze6y6h5gfu9lh4s3d5n22h59jau8va5vv9p0c 


function Pay(C_ad, amount) {
  
//Authentication
var blocktrail = require('blocktrail-sdk');
client = blocktrail.BlocktrailSDK({apiKey: "3265829528aba9920420c411a67cdf8fe65a7dc4", apiSecret: "9414db25da6f25eddb2db69b5ea38fc0709b9503", network: "tBCH", testnet: true});
  
  client.initWallet("MiketBTC", "Br!nk123", function(err, wallet) { 
    
    //Initiate transaction
        value = blocktrail.toSatoshi(amount);
        wallet.pay({C_ad : value}, //sending to CONSUMER wallet
            function(err, result) {
                //console.log(result);
            });
    });

}

 // POST method route
app.post('/', function (req, res) {
  //var myObj = JSON.parse(req.body);
  //res.send(myObj)
    //var myObj = JSON.parse(req);
    //var myJSON = myObj;
  //var myJSONstring = JSON.stringify(myJSON);

  //test = JSON.parse(req)
  //res.send(req['network'])

res.json(req.body)

Pay('2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC',0.00777)

 // var myObj = JSON.parse(req.body);
   //var myObj = req.network;
   //var myJSONstring = JSON.stringify(myObj);
   //res.send('string' + myJSONstring)
 //res.send("hello" + myJSONstring)
 //req.body.network

})
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