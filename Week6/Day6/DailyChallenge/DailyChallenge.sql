SELECT COUNT(*)
FROM actor;

select * from actor

insert into actor
values (201, 'Mia', null, null)
-- ERROR:  null value in column "last_name" of relation "actor" violates not-null constraint
