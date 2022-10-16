const maria = require("mysql");

const conn = maria.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password:'1111',
  database:'single_pj',
  multipleStatements: true
});

module.exports = conn;