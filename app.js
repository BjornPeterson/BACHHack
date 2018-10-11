
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

//2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW :: MERCHANT (temp) ////  / prlmhl94mpr74yuang0azmkyj8xknwr9gg7rtl58dj
   //2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC :: CONSUMER (michaelTest) //// pqtqqe7ztzxfj8yv7ys8m6464xd9755cv5nccg8e6z / prypsl76p0n2rzut7f59p8akmy3eqkn7qs954a3vy8 / pqprlhsyhp6uq0ap448q0tdu372nry48v587q28chr
function Pay(C_ad, amount) {
  
  
  //michael logic
           

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

Pay('2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC',100000)

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