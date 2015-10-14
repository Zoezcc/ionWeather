var express = require('express');
var router = express.Router();
var yrno = require('yr.no-forecast');

router.get('/', function (req, res, next) {
    res.status(200).send("like sunny");
});

router.get('/:lat/:lon', function (req, res, next) {

    var lat = req.params.lat;
    var lon = req.params.lon;
    console.log('lat:', lat, 'lon:', lon);

    yrno.getWeather({
        lat: lat,
        lon: lon
    }, function(err, location) {
        
        location.getCurrentSummary(function(err, forecast) {
           console.log('forecast', forecast); 
           return res.status(200).json(forecast);
        });
        
    });
});

router.get('/5day/:lat/:lon', function(req, res, next) {
    var lat = req.params.lat;
    var lon = req.params.lon;
    console.log('lat:', lat, 'lon:', lon);

    yrno.getWeather({
        lat: lat,
        lon: lon
    }, function(err, location) {
        
        location.getFiveDaySummary(function(err, forecast) {
           console.log('forecast', forecast); 
           return res.status(200).json(forecast);
        });
        
    });
});

module.exports = router;