SELECT name FROM language

SELECT title, description, language.name FROM film
INNER JOIN language 
ON film.language_id = language.language_id

SELECT title, description, language.name FROM film
RIGHT JOIN language 
ON film.language_id = language.language_id

CREATE TABLE new_film (
	id serial PRIMARY KEY, 
	name varchar(100)
)

INSERT INTO new_film (name)
VALUES ('Harry Potter 5'),('Harry Potter 6'),('Harry Potter 7')

CREATE TABLE customer_review (
	review_id serial PRIMARY KEY NOT NULL, 
	film_id INT NOT NULL,
	language_id INT NOT NULL,
	title varchar(100) NOT NULL,
	score INT CHECK (score>=1 AND score <=10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE
)

INSERT INTO customer_review (film_id,language_id,title,score,review_text) VALUES
(1,1,'Good',10,'Very moving plot')

INSERT INTO customer_review (film_id,language_id,title,score,review_text) VALUES
(3,1,'Very Good',9,'Very moving plot as well')

SELECT * FROM customer_review

DELETE FROM new_film WHERE(name ='Harry Potter 5')

SELECT * FROM customer_review