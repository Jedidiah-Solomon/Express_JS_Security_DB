SELECT * FROM admin;

SELECT * FROM users;

UPDATE `users` SET `email`='chinedu.okafor@gmail.com' WHERE `id`=1;


-- Primary is checked
REPLACE INTO users (id, first_name, last_name, gender, email, phone, state, country, photo, password)
VALUES (1, 'Chinedu', 'Okafor', 'male', 'chinedu.okafor@gmail.com', '+2347012345678', 'Lagos', 'Nigeria', 'https://media.istockphoto.com/id/1336324740/photo/having-fun-at-a-garden-party.webp?b=1&s=170667a&w=0&k=20&c=PilnrwQDx06whymXI3k7nRw7ji7AQlZM1kvG8lCpC0Q=', 'hashedpassword1');

DELETE FROM users WHERE id = 1;

