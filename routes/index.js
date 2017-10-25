var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/jgr', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  switch (req.body.abc){
    case "1":
      temp=["北京","财经","H5"]
      break;
    case "2":
      temp=["小明","小红","小白"]
      break;
  }
  res.send( { name:temp });
});



module.exports = router;
