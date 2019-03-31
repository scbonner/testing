drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;

create table Products (
    ID integer auto_increment not null,
    PRODUCT_NAME varchar(50) not null,
    DEPARTMENT varchar(50) not null,
    PRICE decimal(10,2),
    STOCK_QUANTITY integer(10),
    primary key(id)
);

insert into Products(PRODUCT_NAME, DEPARTMENT, PRICE, STOCK_QUANTITY)
values ('Bibbs', 'Infants', 10, 150), ('Computer', 'DELL', 700, 110), ('Bicycles', 'Fitness', 250, 50), ('Sneakers', 'NIKE', 250, 10), ('Stoneware', 'Kitchen', 100, 10),
('Couch', 'Furniture', 500, 10), ('Assessories', 'Clothes', 100, 100), ('Tile', 'Flooring', 100, 90), ('Earrings', 'Jewelry', 140, 200), ('Television', 'Entertainment', 400, 70);


select * from Products;