var admin = require("firebase-admin");
const fs = require('fs');
path = require('path');
var serviceAccount = require("./serviceAccountKey.json");
filePath = path.join(__dirname, 'output.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hawk-calculator.firebaseio.com"
});


fs.readFile(filePath, "utf8",function(err,data){
    if(err){
        throw err;
    }
    admin.database().ref("/data/").update({
        json: data
    })
});