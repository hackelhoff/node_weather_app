//get data from open weather map API
var http = require('http');

function printMessage(place, temp, description) {
  var message = "The temperature in " + place + " is " + temp + " degrees F.";
  message += " You should expect " + description + ".";
  console.log(message);
};

//print out error messages
function printError(error){
  console.error(error.message);
};

function get(location) {
  var request = http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + location + ',us&units=imperial&APPID=0a32cf93aa4e1b5cf048e5048e4b38f9', (response) => {
      body = '';
      response.on('data', (chunk) => {
        body += chunk;
      });
      response.on('end', () => {
        if(response.statusCode === 200) {
          try {
            var report = JSON.parse(body);
            printMessage(report.name, report.main.temp, report.weather[0].description);
            // console.log(report);
          } catch(error) {
            printError(error);
          }
        } else {
          printError({message: "There was a connection error"});
        }
      });
    })
    // vv method chaining vv
    .on("error", printError);
};

//have to state what to do when required for get
module.exports.get = get;
