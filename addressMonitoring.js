//Authentication
var blocktrail = require('blocktrail-sdk');
client = blocktrail.BlocktrailSDK({apiKey: "3265829528aba9920420c411a67cdf8fe65a7dc4", apiSecret: "9414db25da6f25eddb2db69b5ea38fc0709b9503", network: "tBCH", testnet: true});

//Setup webhook (once off only)
/*client.setupWebhook('https://atlantean-site-218917.appspot.com/', 'mywallet',
    function(err, result) {
        console.log(result);
    });*/

//View current webhook details    
client.getWebhook('wallet-temp', function(err, result) {
        console.log(result)
    });

    //Add wallet event
client.subscribeAddressTransactions('mywallet',
    '2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW', 0, function(err, result) {
       console.log(result);
    });  

//Initilise CONSUMER wallet
client.initWallet("michaelTest", "Br!nk123", function(err, wallet) { 
    //Initiate transaction to MERCHANT
        value = blocktrail.toSatoshi(0.004);
        wallet.pay({'2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW': value}, //sending to mywallet
            function(err, result) {
                console.log(result);
            });
    });
    

/*
client.allWebhooks('mywallet',1, 1, function(err, result) {
if (length(result) === 0){
    console.log("No events")
} else {
    console.log("There are events")
}
    });

//Helper functions
function convert(amount){
    return(amount/100000000)
    }

//Check wallet balance
client.address('2N4ExppLPbTGqroYxdDK91sbDbKwQ9BprWY',
    function(err, address) { 
        var bal = address.balance
        //console.log(convert(bal));
     });
client.blockLatest(
    function(err, block) { 
        //console.log(block.hash); 
    });

    // -----------------------------------   SENDING   ------------------------------------
    //Demo wallet balances
    //2NGZRVn1btCG4Xxd9esSnFXiHAP6DrBL4yW :: MERCHANT (temp) ////  / prlmhl94mpr74yuang0azmkyj8xknwr9gg7rtl58dj
    //2MuFZLfZLMTPDqzRRkU4va36EwqW1VubAnC :: CONSUMER (michaelTest) //// pqtqqe7ztzxfj8yv7ys8m6464xd9755cv5nccg8e6z / prypsl76p0n2rzut7f59p8akmy3eqkn7qs954a3vy8 / pqprlhsyhp6uq0ap448q0tdu372nry48v587q28chr
    //2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU :: COMMUNITY (MiketBTC) //// pr6rrze6y6h5gfu9lh4s3d5n22h59jau8va5vv9p0c 

    //flow
    // send from CONSUMER to MERCHANT 
    // then send from COMMUNITY to CONSUMER

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Initilise CONSUMER wallet
client.initWallet("michaelTest", "Br!nk123", function(err, wallet) { 
//Check wallet balace    
    /*wallet.getBalance(
        function(err, confirmedBalance, unconfirmedBalance) {
            console.log('Balance: ', blocktrail.toBTC(confirmedBalance));
            console.log('Unconfirmed Balance: ', blocktrail.toBTC(unconfirmedBalance));
        }); 
//Initiate transaction
    value = blocktrail.toSatoshi(0.016);
    wallet.pay({'2NFWQDTX7KixEmgQm2DZvBVtZ4UrZdrGzQU': value}, //sending to mywallet
        function(err, result) {
            console.log(result);
        });
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Initialise MERCHANT wallet
/*
client.initWallet("temp", "temp12345678", function(err, wallet) {     
    wallet.transactions(function(err, result) {
        var addressFrom = result.data[0]['addresses']
        console.log(result);
    });
})*/

