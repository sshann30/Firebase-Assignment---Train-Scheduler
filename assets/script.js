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

database.ref().on("value", function (snapshot) {

})

var trainName; 
var destination;
var firstTrainName;
var frequency;
var nextArrival;
var minutesaway

$("#submit").on("click", function (event) {
  event.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrain = $("#firstTrain").val().trim();
  frequency = $("#frequency").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    train: firstTrain,
    frequency: frequency
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
  var csv = childSnapshot.val()
  var Tname = csv.name;
  var Tdestination = csv.destination;
  var Ttrain = csv.train;
  var Tfrequency = csv.frequency;


  // last 5ish lines here (next arrival and minutes away)
  var firstTimeConverted = moment(Ttrain, "HH:mm").subtract(1, "years");
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  var remainder = diffTime % Tfrequency;
  var minutesAway = Tfrequency - remainder;
  var nextArrival = moment().add(minutesAway, "minutes");

  var tr = $("<tr>").append(

  $("<td>").text(Tname),
  $("<td>").text(Tdestination),
  $("<td>").text(Tfrequency),
  $("<td>").text(nextArrival), 
  $("<td>").text(minutesAway),


); $("tbody").append(tr);
 
});







