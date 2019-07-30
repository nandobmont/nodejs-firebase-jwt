const firebase = require("firebase-admin");

firebase.initializeApp({
  credential: firebase.credential.cert(
    require("../files/service_account_credentials.json")
  )
});

module.exports = firebase;
