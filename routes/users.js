var express = require('express');
var router = express.Router();
var Redis = require("ioredis");
var pub = new Redis(process.env.REDIS_URI);
// redis public message 

/* GET users listing. */
router.get('/', function(req, res, next) {
  // call woker to do some work.
  worker(req.query.name);
  res.send('respond with a resource');
});


// worker
function worker(data){
  setTimeout(() => {
    pub.publish("notify", `${data}`);
  }, 3000);
}

module.exports = router;
