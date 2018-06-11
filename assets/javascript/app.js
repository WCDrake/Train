

var config = {
    apiKey: "AIzaSyDMYyKQy0Hp6rJtwqVzjPqP1oOZcquTGGg",
    authDomain: "fir-homework-ebc54.firebaseapp.com",
    databaseURL: "https://fir-homework-ebc54.firebaseio.com",
    projectId: "fir-homework-ebc54",
    storageBucket: "fir-homework-ebc54.appspot.com",
    messagingSenderId: "383266173713"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(){

    var trainName = $("#trainName").val().trim();
    var lineName = $("#line").val().trim();
    var destination = $("#destination").val().trim();
    var frequency = $("#frequency").val().trim();
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + lineName + "</td><td>"+ destination + "</td><td>"+ frequency + "</td><td>");

    var newInput = {
        name:  trainName,
        line: lineName,
        destination: destination,
        frequency: frequency,
    }

    database.push(newInput);



    $("#trainName").val("");
    $("#line").val("");
    $("#destination").val("");
    $("#frequency").val("");

    return false;


});

