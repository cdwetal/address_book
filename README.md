# address_book

A simple address book app built on the MERN stack.

## Installing

To install the address_book app, please be sure to setup your MySQL database properly. You may do this by running the SQL file
```
db.sql
```
script in the MySQL Command Line Client, or you may run the individual SQL statements
```
CREATE DATABASE address_book;
```
```
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `streetAddress` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zip` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
individually in the MySQL Command Line Client.