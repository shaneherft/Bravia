var http = require('http');
const PORT=8080;
var bravia = require('./lib');
var express = require('express');
var app = express();
var dispatcher = require('httpdispatcher');

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}



bravia('192.168.1.6', function(client) {

  // List available commands
  client.getCommandNames(function(list) {
    console.log(list);
  });

  // Call a command

  dispatcher.onGet("/on", function(req, res) {
      client.exec("PowerOn");
  });

  dispatcher.onGet("/off", function(req, res) {
      client.exec("PowerOff");
  });

  dispatcher.onGet("/netflix", function(req, res) {
      client.exec("Netflix");
  });

  dispatcher.onGet("/volumeup", function(req, res) {
      client.exec("VolumeUp");
  });

  dispatcher.onGet("/mute", function(req, res) {
      client.exec("Mute");
  });

  dispatcher.onGet("/volumedown", function(req, res) {
      client.exec("VolumeDown");
  });

  dispatcher.onGet("/tvpause", function(req, res) {
      client.exec("Pause");
  });

  dispatcher.onGet("/play", function(req, res) {
      client.exec("Play");
  });

  dispatcher.onGet("/confirm", function(req, res) {
      client.exec("Confirm");
  });

  dispatcher.onGet("/home", function(req, res) {
      client.exec("Home");
  });

  dispatcher.onGet("/enter", function(req, res) {
      client.exec("Enter");
  });

  dispatcher.onGet("/play", function(req, res) {
      client.exec("Play");
  });

  dispatcher.onGet("/up", function(req, res) {
      client.exec("Up");
  });

  dispatcher.onGet("/down", function(req, res) {
      client.exec("Down");
  });

  dispatcher.onGet("/left", function(req, res) {
      client.exec("Left");
  });

  dispatcher.onGet("/right", function(req, res) {
      client.exec("Right");
  });

  dispatcher.onGet("/return", function(req, res) {
      client.exec("Return");
  });

});
