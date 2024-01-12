create table students (
	id serial primary key,
	last_name varchar(50) not null,
	first_name varchar(50) not null,
	birth_date date not null
)

insert into students(first_name,last_name,birth_date)
values
('Marc','Benichou','1998-11-02'),
('Yoan','Cohen','2010-12-03'),
('Lea','Benichou','1987-07-27'),
('Amelia','Dux','1996-04-07'),
('David','Grez','2003-06-14'),
('Omer','Simpson','1980-10-03');

select * from students
select first_name, last_name from students
select first_name, last_name from students where id = 2
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc';
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
SELECT first_name, last_name FROM students WHERE id IN (1, 3);


