var express = require('express');
var router = express.Router();
var Redis = require("ioredis");
var pub = new Redis(process.env.REDIS_URI);
// redis public message 

/* GET users listing. */
router.post('/', function(req, res, next) {
  // call woker to do some work.
  console.log(req.body);
  worker(req.body);
  res.send('respond with a resource');
});

// send message to everyone in room.
router.get('/', function(req, res, next){
  worker({content:"Send to everyone"});
  res.send('respond with a resource');
})


// worker
function worker(data){
  setTimeout(() => {
    pub.publish("notify", `${JSON.stringify(data)}`);
  }, 1000);
}

module.exports = router;
