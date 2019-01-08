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
  var database = firebase.database();
  
var trainInfo = {
    name: ["Test"],
    destination: ["Test"],
    first: ["Test"],
    frequency: ["Test"],
    
};

database.ref().set({
  trainName: trainInfo.name,
  trainDestination: trainInfo.destination,
  trainFirstTime: trainInfo.first,
  trainFrequency: trainInfo.frequency
})

database.ref().on("value",function(snapshot){
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var trainNameTd = $("<td>").text(snapshot.val().trainName);
    var trainDestinationTd = $("<td>").text(snapshot.val().trainDestination);
    var trainFirstTimeTd = $("<td>").text(snapshot.val().trainFirstTime);
    var trainFrequencyTd = $("<td>").text(snapshot.val().trainFrequency);

    // Append the newly created table data to the table row
    tRow.append(
      trainNameTd,
      trainDestinationTd,
      trainFirstTimeTd,
      trainFrequencyTd
    );
    // Append the table row to the table body
    $("tbody").append(tRow);
});

    


