const express = require("express");
const router = express();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// router.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   store: new FileStore()
// }))

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

// login 검사 api
router.get("/login", (req, res) => {
  const userID = req.query.userid;
  const userPW = req.query.userpw;
  maria.query(
    `select * from user where id='${userID}' and password='${userPW}'`,
    function (err, rows, fields) {
      if (!err) {
        // if(req.session.loginUserData === undefined){
        //   req.session.loginUserData = rows[0];
        // } else {
        //   req.session.loginUserData = rows[0];
        // }
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 회원가입 id검사 api
router.get("/signup/idCheck", (req, res) => {
  const idCheck = req.query.idCheck;

  maria.query(
    `select * from user where id='${idCheck}'`,
    function (err, rows, fields) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 회원가입 name검사 api
router.get("/signup/nameCheck", (req, res) => {
  const nameCheck = req.query.nameCheck;

  maria.query(
    `select * from user where name='${nameCheck}'`,
    function (err, rows, fields) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 회원가입 phNum검사 api
router.get("/signup/phNumCheck", (req, res) => {
  const phNumCheck = req.query.phNumCheck;

  maria.query(
    `select * from user where phoneNum='${phNumCheck}'`,
    function (err, rows, fields) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//회원가입 api
router.get("/signup/createuser", (req, res) => {
  const createId = req.query.createId;
  const createPw = req.query.createPw;
  const createName = req.query.createName;
  const createPhNum = req.query.createPhNum;

  maria.query(
    `insert into user(
      id,
      password,
      name,
      phoneNum,
      grade
    ) values(
      '${createId}',
      '${createPw}',
      '${createName}',
      '${createPhNum}',
      'client'
    );`,
    function (err, rows, fields) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// router.get("/sessionTest", (req,res)=>{
//   console.log(req.session);
//   if(req.session.num === undefined){
//     req.session.num = 1;
//   } else{
//     req.session.num += 1;
//   }
//   res.send(`Views : ${req.session.num}`);
// })

module.exports = router;
