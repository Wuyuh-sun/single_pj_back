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