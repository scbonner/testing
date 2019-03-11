drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;

create table Products (
    ID integer auto-increment not null,
    PRODUCT_NAME varchar(50) not null,
    DEPARTMENT varchar(50) not null,
    PRICE decimal(10,2),
    STOCK_QUANTITY integer(10),
    primary key(id)
);


select * from Products;

