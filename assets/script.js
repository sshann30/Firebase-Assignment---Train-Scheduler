 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCG89sdvMlHnBpoj4tUii0dpMyuT7Xke4w",
    authDomain: "train-f4f93.firebaseapp.com",
    databaseURL: "https://train-f4f93.firebaseio.com",
    projectId: "train-f4f93",
    storageBucket: "train-f4f93.appspot.com",
    messagingSenderId: "299002977137"
  };
  firebase.initializeApp(config);

// Initial Values
var database = firebase.database();
var trainName;
var destination;
var firstTrainName;
var frequency;
var nextArrival;
var minutesaway

$("#submit").on("click", function (event) {
  event.preventDefault();

  var newTrain = {
  trainName: $("#trainName").val().trim(),
  destination: $("#destination").val().trim(),
  firstTrain: $("#firstTrain").val().trim(),
  frequency: $("#frequency").val().trim(),
  };

  database.ref().push(newTrain);
      
  //empties inputs post submit button
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrainTime").val("");
  $("#frequency").val("");

  });

// pushing
database.ref().on("child_added", function (childSnapshot) {
  var csv = childSnapshot.val();
  firstTrainTime = csv.firstTrainTime

//last 5ish lines here (next arrival and minutes away)
// var firstTimeConverted = moment(sv.firstTrainTime, "HH:mm").subtract(1, "years");
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// var remainder = diffTime % sv.frequency;
// var minutesAway = sv.frequency - remainder;
// var nextArrival = moment().add(minutesAway, "minutes");

  var tr = $("<tr>");

trainNameTd = $("<td>").text(csv.trainName);
destinationTd = $("<td>").text(csv.destination);
frequencyTd = $("<td>").text(csv.frequency);

  tr.append(trainNameTd, destinationTd, frequencyTd)

  $("tbody").append(tr);
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});







