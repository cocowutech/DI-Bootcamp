CREATE TABLE Customer (
	id serial PRIMARY KEY,
	first_name varchar(100) NOT NULL,
	last_name varchar(100) NOT NULL
)

CREATE TABLE CustomerProfile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INT UNIQUE,
	FOREIGN KEY (customer_id) REFERENCES Customer(id)
)

INSERT INTO Customer(first_name, last_name) 
VALUES ('John','Doe'),('Jerome','Lalu'),('Lea','Rive')

INSERT INTO CustomerProfile (isLoggedIn, customer_id) VALUES 
(true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

SELECT C.first_name
FROM Customer C
JOIN CustomerProfile CP ON C.id = CP.customer_id
WHERE CP.isLoggedIn = true;

SELECT C.first_name, CP.isLoggedIn
FROM Customer C
LEFT JOIN CustomerProfile CP ON C.id = CP.customer_id;

SELECT COUNT(*)
FROM Customer C
LEFT JOIN CustomerProfile CP ON C.id = CP.customer_id
WHERE CP.isLoggedIn = false OR CP.isLoggedIn IS NULL;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12')


SELECT S.name, B.title 
FROM Library L
JOIN Student S ON L.student_fk_id = S.student_id
JOIN Book B ON L.book_fk_id = B.book_id;

SELECT AVG(S.age) AS average_age
FROM Library L
JOIN Student S ON L.student_fk_id = S.student_id
JOIN Book B ON L.book_fk_id = B.book_id
WHERE B.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'John';


