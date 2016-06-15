var mqtt = require('mqtt')
var mongoose = require('mongoose');
var Temp = mongoose.model('Temp');

module.exports = (function(){
  return {
    index: function(req, res){
    Temp.find({}, function(err, tempatures){
      res.json(tempatures)
    })


    },
    getTemp: function(req, res){
      
      var output
      // dummy temp 
      var max = 98;
      var min = 90;
      var temp = Math.random()*(max - min) + min; 

      console.log(temp)

      var client = mqtt.connect('mqtt://ec2-52-38-204-101.us-west-2.compute.amazonaws.com')  
      client.on('connect', function () {
        client.subscribe('sensor/temp');
        client.publish('sensor/temp', temp.toString());
      });

      client.on('message', function (topic, message) {
        // message is Buffer 
        console.log(message.toString());
        Temp.create({temp:Number(message)}, function(err, result){
          console.log("result", result)
          res.json(result)
        });



        client.end();
      })

      

    }
  }
})();