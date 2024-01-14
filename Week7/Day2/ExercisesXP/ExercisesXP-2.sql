-- Exercise2

SELECT * FROM customer
SELECT first_name||' '||last_name AS full_name FROM customer
SELECT DISTINCT create_date FROM customer

SELECT * FROM customer 
ORDER BY first_name DESC

SELECT film_id,title,description,release_year,rental_rate FROM film
ORDER BY rental_rate ASC

SELECT *
FROM customer
INNER JOIN address
ON address.address_id = customer.address_id
WHERE district = 'Texas'

SELECT * FROM film 
WHERE film_id = 15 OR film_id = 150

SELECT film_id,title,description,length,rental_rate FROM film 
WHERE title = 'Scarlet A'

SELECT film_id,title,description,length,rental_rate FROM film 
WHERE title LIKE 'Br%'

SELECT * FROM film
ORDER BY rental_rate ASC
LIMIT 10

SELECT payment.customer_id,first_name,last_name,payment_date FROM customer
INNER JOIN payment 
ON customer.customer_id = payment.customer_id

SELECT * FROM film LEFT JOIN inventory ON film.film_id = inventory.film_id 
WHERE inventory IS Null 

SELECT * from city INNER JOIN country on city.country_id = country.country_id