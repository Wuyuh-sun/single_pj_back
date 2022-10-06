// express 모듈 호출
const express = require("express");
const app = express();
const cors = require("cors");

const api = require("./routes/index");

//mariaDB connect
const maria = require("./db/maria");
maria.connect();

app.use(cors());

// api 처리는 './routes/index'에서 일괄처리
// 접속 경로 http://localhost:PORT/api/[get요청]
app.use("/api", api);

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
app.get("/", (req, res) => {
  res.send("server runnig~");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
