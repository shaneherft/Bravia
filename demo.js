
var bravia = require('./lib');

bravia('192.168.1.6', function(client) {

  // List available commands
  client.getCommandNames(function(list) {
    console.log(list);
  });

  // Call a command
  client.exec('PowerOff');

});
