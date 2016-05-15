var weather = require('./weather.js');

var ponteVedra = 32004;
var newYork = 10003;
var brooklyn = 11216;
var chicago = 60601;
var tallahassee = 32304;

var locations = [ponteVedra, newYork, brooklyn, chicago, tallahassee];

// weather.get(brooklyn);

locations.forEach(weather.get);
