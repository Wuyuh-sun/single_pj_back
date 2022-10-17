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

function jsonKeyUpperCase(object) {
  if (Array.isArray(object)) {
    // 리스트<맵> 형식으로 넘어오는 경우 처리
    object.forEach((item, index) => {
      object[index] = Object.fromEntries(
        Object.entries(item).map(([key, value]) => [key.toUpperCase(), value])
      );
    });
    return object;
  } else {
    // 맵 형식으로 넘어오는 경우 처리
    return Object.fromEntries(
      Object.entries(object).map(([key, value]) => [key.toUpperCase(), value])
    );
  }
}

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
        rows = jsonKeyUpperCase(rows);
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
        rows = jsonKeyUpperCase(rows);
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
        rows = jsonKeyUpperCase(rows);
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
        rows = jsonKeyUpperCase(rows);
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
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 현재 로그인중인 유저정보 가져오기 api
router.get("/logingUserInfo", (req, res) => {
  const reqID = req.query.reqID;

  maria.query(
    `select * from user where ID='${reqID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 현재 로그인중인 유저정보 수정 api
router.get("/logingUserUpdate", (req, res) => {
  const reqID = req.query.reqID;
  const reqPW = req.query.reqPW;
  const reqNAME = req.query.reqNAME;

  maria.query(
    `update user set PASSWORD='${reqPW}',NAME='${reqNAME}' where ID='${reqID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// 현재 로그인중인 유저의 예약내역 확인 api

router.get("/logingUserNowBook", (req, res) => {
  const reqID = req.query.reqID;

  maria.query(
    `select * from book where ID='${reqID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

// default 장소 조회 api
router.get("/defaultroomlist", (req, res) => {
  const KIU = "F01";
  const CU = "F02";
  const KUMOH = "F03";
  const ANDONG = "F04";

  maria.query(
    `select * from room where DEPTH=0 order by DEPTH asc;`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//  B_room 조회 api
router.get("/broomlist", (req, res) => {
  const PID = req.query.PID;
  maria.query(
    `select * from room where DEPTH=1 and P_ID='${PID}' order by DEPTH asc;`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//예약 api
router.get("/roombookexecution", (req, res) => {
  const BOOK = req.query.BOOK;
  const PATH = req.query.PATH;
  const DATE = req.query.DATE;
  const TIME = req.query.TIME;
  const TIMEIDX = req.query.TIMEIDX;
  const ID = req.query.ID;
  const USERNAME = req.query.USERNAME;

  maria.query(
    `insert into book(
      BOOK,
      PATH,
      DATE,
      TIME,
      TIMEIDX,
      ID,
      USERNAME
    ) values(
      '${BOOK}',
      '${PATH}',
      '${DATE}',
      '${TIME}',
      '${TIMEIDX}',
      '${ID}',
      '${USERNAME}'
    );` +
      `insert into lastbook(
      BOOK,
      PATH,
      DATE,
      TIME,
      TIMEIDX,
      ID,
      USERNAME
    ) values(
      '${BOOK}',
      '${PATH}',
      '${DATE}',
      '${TIME}',
      '${TIMEIDX}',
      '${ID}',
      '${USERNAME}'
    );`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//유저당 예약 전체 취소 api
router.get("/userroombookcancel", (req, res) => {
  const ID = req.query.ID;

  maria.query(
    `delete from book where ID='${ID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//유저당 현재 예약 조회 api
router.get("/userroombookread", (req, res) => {
  const ID = req.query.ID;

  maria.query(
    `select * from book where ID='${ID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//유저당 최근 예약 조회3 api
router.get("/userlastbookread3", (req, res) => {
  const ID = req.query.ID;

  maria.query(
    `select * from lastbook where ID='${ID}' order by IDX desc limit 3`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//유저당 최근 예약 조회5 api
router.get("/userlastbookread5", (req, res) => {
  const ID = req.query.ID;

  maria.query(
    `select * from lastbook where ID='${ID}' order by IDX desc limit 5`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});
//예약확인 api
router.get("/roombookread", (req, res) => {
  const PATH = req.query.PATH;
  const DATE = req.query.DATE;
  // const ID = req.query.ID;

  maria.query(
    `select * from book where PATH='${PATH}' and DATE='${DATE}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
        res.send(rows);
      } else {
        console.log("error: " + err);
        res.send(err);
      }
    }
  );
});

//예약취소 api
router.get("/roombookcancel", (req, res) => {
  const PATH = req.query.PATH;
  const DATE = req.query.DATE;
  const TIMEIDX = req.query.TIMEIDX;
  const ID = req.query.ID;

  maria.query(
    `delete from book where PATH='${PATH}' and DATE='${DATE}' and TIMEIDX='${TIMEIDX}' and ID='${ID}'`,
    function (err, rows, fields) {
      if (!err) {
        rows = jsonKeyUpperCase(rows);
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
