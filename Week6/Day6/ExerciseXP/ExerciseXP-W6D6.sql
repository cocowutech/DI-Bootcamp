create table items(
	id serial primary key,
	name varchar(50) not null,
	price integer not null
)

select * from items

create table customers(
id serial primary key,
firstname varchar(50) not null,
lastname varchar(50) not null	
)

select * from customers

insert into items (name, price)
values ('Small Desk',100),('Large desk',300),('Fan',80)

insert into customers (firstname,lastname)
values ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson')

select * from items 
where price > 80

select * from items 
where price <= 300 order by price desc

select * from customers 
where lastname = 'Smith'
-- the outcome is error since there is no one with Smith as the last name

select * from customers 
where lastname = 'Jones'

select * from customers 
where firstname != 'Scott'
