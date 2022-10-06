const express = require("express");
const router = express();

//mariaDB connect
const maria = require("../db/maria");

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get("/test", (req, res) => {
  // res.send({ test : "this is test!!"});
  maria.query("select * from user", function (err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      console.log("error: " + err);
      res.send(err);
    }
  });
});

module.exports = router;
