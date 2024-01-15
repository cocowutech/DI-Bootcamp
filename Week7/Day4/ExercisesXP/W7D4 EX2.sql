SELECT * FROM film 
INNER JOIN language 
ON film.language_id = language.language_id

UPDATE film 
SET language_id=3
WHERE title = 'Academy Dinosaur'

DROP table customer_review

SELECT * from rental
INNER JOIN inventory on rental.inventory_id = inventory.inventory_id 
LEFT JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY replacement_cost DESC
LIMIT 30


SELECT * FROM film_actor
INNER JOIN film ON film.film_id = film_actor.film_id
WHERE (actor_id = (
	SELECT actor_id FROM actor WHERE (first_name = 'Penelope'and last_name = 'Monroe')
	AND film.fulltext @@ to_tsquery ('English','sumo')
	))

SELECT * FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id = film_category.category_id 
WHERE length<60 AND rating='R'

SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id= inventory.inventory_id 
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'AND rental_rate > 4
AND return_date > '2005-07-28' AND  return_date < '2005-08-01' 

SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id= inventory.inventory_id 
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title LIKE '%Boat%' OR film.description LIKE '%Boat%')
ORDER BY film.replacement_cost DESC