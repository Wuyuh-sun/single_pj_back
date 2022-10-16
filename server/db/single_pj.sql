-- database
CREATE DATABASE SINGLE_PJ;

USE SINGLE_PJ;

-- user table

DROP TABLE `USER`;

CREATE TABLE `USER`(
  `IDX` INT(11) NOT NULL AUTO_INCREMENT,
  `ID` VARCHAR(30) NOT NULL,
  `PASSWORD` VARCHAR(30) NOT NULL,
  `NAME` NVARCHAR(30) NOT NULL,
  `PHONENUM` INT(11) NOT NULL,
  `GRADE` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`IDX`)
);

INSERT INTO `USER`(
  `ID`,
  `PASSWORD`,
  `NAME`,
  `PHONENUM`,
  `GRADE`
) VALUES(
  'root',
  'root',
  'root',
  01082180970,
  'root'
);

-- room table

CREATE TABLE `ROOM`(
  `ID` VARCHAR(30) NULL,
  `R_NAME` VARCHAR(30) NULL,
  `DEPTH` INT(11) NULL,
  `P_ID` VARCHAR(30) NULL,
  `R_IDX` VARCHAR(30) NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'F01',
  '경일대학교',
  0,
  NULL,
  '0'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'F02',
  '대구가톨릭대학교',
  0,
  NULL,
  '1'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'F03',
  '국립긍오공과대학교',
  0,
  NULL,
  '2'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'F04',
  '국립안동대학교',
  0,
  NULL,
  '3'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'B01',
  '중앙도서관',
  1,
  'F01',
  '0'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'B02',
  '산학협력관',
  1,
  'F01',
  '1'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'B03',
  '창의융합교육센터',
  1,
  'F01',
  '2'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'R01',
  '스터디룸(1)',
  2,
  'B03',
  '0'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'R02',
  '스터디룸(2)',
  2,
  'B03',
  '1'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'R03',
  '스터디룸(3)',
  2,
  'B03',
  '2'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'R04',
  '캡스톤디자인실습실(1)',
  2,
  'B03',
  '3'
);

INSERT INTO `ROOM`(
  `ID`,
  `R_NAME`,
  `DEPTH`,
  `P_ID`,
  `R_IDX`
) VALUE (
  'R05',
  '캡스톤디자인실습실(2)',
  2,
  'B03',
  '4'
);

-- book TABLE

CREATE TABLE `BOOK`(
  `IDX` INT(11) NOT NULL AUTO_INCREMENT,
  `BOOK` VARCHAR(100) NOT NULL,
  `PATH` VARCHAR(50) NOT NULL,
  `DATE` VARCHAR(50) NOT NULL,
  `TIME` VARCHAR(50) NOT NULL,
  `TIMEIDX` INT(11) NOT NULL,
  `ID` VARCHAR(50) NOT NULL,
  `USERNAME` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`IDX`),
  UNIQUE KEY (`BOOK`)
);

CREATE TABLE `LASTBOOK`(
  `IDX` INT(11) NOT NULL AUTO_INCREMENT,
  `BOOK` VARCHAR(100) NOT NULL,
  `PATH` VARCHAR(50) NOT NULL,
  `DATE` VARCHAR(50) NOT NULL,
  `TIME` VARCHAR(50) NOT NULL,
  `TIMEIDX` INT(11) NOT NULL,
  `ID` VARCHAR(50) NOT NULL,
  `USERNAME` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`IDX`)
);