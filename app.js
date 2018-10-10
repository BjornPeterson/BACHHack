//import { parse } from 'url';

'use strict';

const express = require('express');

const app = express();

//output hello world
app.get('/', (req, res) => {
  res.status(200).send('Hello, world! 411');
});
// [END hello_world]

// POST method route
app.post('/', function (req, res) {
 
  // var myObj = JSON.parse(req.body);
  var myObj = req.body;
  //var myJSONstring = parse(myObj);
  res.send("hello ")
  //res.send("hello" + myJSONstring)

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
