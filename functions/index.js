const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  const number = Math.floor(Math.random() * 100) + 1;

  response.send(
    "Hello from Firebase!, I am vegan here is a proof >>> ${number} "
  );
});
