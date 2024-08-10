-- Active: 1723308428393@@127.0.0.1@3306@ng_blog_users


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender ENUM("male", "female"),
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  state VARCHAR(50),
  country VARCHAR(50),
  photo VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender ENUM("male", "female"),
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  state VARCHAR(50),
  country VARCHAR(50),
  photo VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (first_name, last_name, gender, email, phone, state, country, photo, password)
VALUES
('Chinedu', 'Okafor', 'male', 'chinedu.okafor@example.com', '+2347012345678', 'Lagos', 'Nigeria', 'https://media.istockphoto.com/id/1336324740/photo/having-fun-at-a-garden-party.webp?b=1&s=170667a&w=0&k=20&c=PilnrwQDx06whymXI3k7nRw7ji7AQlZM1kvG8lCpC0Q=', 'hashedpassword1'),
('Ngozi', 'Ibe', 'female', 'ngozi.ibe@example.com', '+2347012345679', 'Abuja', 'Nigeria', 'https://media.istockphoto.com/id/1425797951/photo/portrait-of-beautiful-smiling-woman.webp?b=1&s=170667a&w=0&k=20&c=wYDlVzZDPiaIcJRhOm0NiW9P42X6hElDcHqoPxxHdVk=', 'hashedpassword2'),
('Emeka', 'Nwankwo', 'male', 'emeka.nwankwo@example.com', '+2347012345680', 'Enugu', 'Nigeria', 'https://media.istockphoto.com/id/1337995262/photo/portrait-of-adult-bald-smiling-attractive-man-forty-years-with-beard-in-blue-shirt.webp?b=1&s=170667a&w=0&k=20&c=IKxCrmt70Ld-fMGXiRPssp1J0ss6XhRSnj1CHzEIJS4=', 'hashedpassword3'),
('Chinyere', 'Eze', 'female', 'chinyere.eze@example.com', '+2347012345681', 'Anambra', 'Nigeria', 'https://media.istockphoto.com/id/992980718/photo/independent-senior-woman-with-short-hair-portrait-outdoors.webp?b=1&s=170667a&w=0&k=20&c=VWGO7qIpCkjvTGaOmjqiEGOkTtEhsdpuMnWoYU6qnH8=', 'hashedpassword4'),
('Uche', 'Ogbonna', 'male', 'uche.ogbonna@example.com', '+2347012345682', 'Imo', 'Nigeria', 'https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=', 'hashedpassword5'),
('Ada', 'Chukwu', 'female', 'ada.chukwu@example.com', '+2347012345683', 'Rivers', 'Nigeria', 'https://media.istockphoto.com/id/1163683003/photo/confident-woman.webp?b=1&s=170667a&w=0&k=20&c=74KVMHyw1tHQ2ehF7XueUvUP_PTd71BhiXXVm0Nl91g=', 'hashedpassword6'),
('Michael', 'Adeniran', 'male', 'michael.adeniran@example.com', '+2347012345684', 'Kano', 'Nigeria', 'https://media.istockphoto.com/id/1811478690/photo/portrait-of-thoughtful-senior-man-looking-through-window.webp?b=1&s=170667a&w=0&k=20&c=1HZkK8Saq4N6fJlGmMjH5s054orv9Afb1qlS6mayIvM=', 'hashedpassword7'),
('Olivia', 'Nkechi', 'female', 'olivia.nkechi@example.com', '+2347012345685', 'Ogun', 'Nigeria', 'https://media.istockphoto.com/id/1461077577/photo/spring-portrait-of-excited-young-woman.webp?b=1&s=170667a&w=0&k=20&c=Q3EUxr0Rpv1g4JJTdumH2IEb4marv2pCXZWZbBXuQa8=', 'hashedpassword8'),
('Kingsley', 'Ibrahim', 'male', 'kingsley.ibrahim@example.com', '+2347012345686', 'Kaduna', 'Nigeria', 'https://media.istockphoto.com/id/1934628794/photo/blond-woman-with-a-smile-headshot.webp?b=1&s=170667a&w=0&k=20&c=2b6tK6my75d_7huEhH9t6RjWEaGR02X7Tk07X19dxmo=', 'hashedpassword9'),
('Jennifer', 'Madu', 'female', 'jennifer.madu@example.com', '+2347012345687', 'Delta', 'Nigeria', 'https://media.istockphoto.com/id/481292759/photo/portrait-of-young-architect.webp?b=1&s=170667a&w=0&k=20&c=9_Mj57ghYFgS768JXrBVRVi9-J1FsOV9pdGh37B77xM=', 'hashedpassword10');


INSERT INTO admin (first_name, last_name, gender, email, phone, state, country, photo, password)
VALUES
('Emmanuel', 'Akpan', 'male', 'emmanuel.akpan@example.com', '+2347012345678', 'Lagos', 'Nigeria', 'https://media.istockphoto.com/id/1934628794/photo/blond-woman-with-a-smile-headshot.webp?b=1&s=170667a&w=0&k=20&c=2b6tK6my75d_7huEhH9t6RjWEaGR02X7Tk07X19dxmo=', 'hashedpassword1'),
('Folake', 'Adewale', 'female', 'folake.adewale@example.com', '+2347012345679', 'Abuja', 'Nigeria', 'https://media.istockphoto.com/id/481292759/photo/portrait-of-young-architect.webp?b=1&s=170667a&w=0&k=20&c=9_Mj57ghYFgS768JXrBVRVi9-J1FsOV9pdGh37B77xM=', 'hashedpassword2'),
('Tolu', 'Sanni', 'male', 'tolu.sanni@example.com', '+2347012345680', 'Ogun', 'Nigeria', 'https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.webp?b=1&s=170667a&w=0&k=20&c=74AEwolZAJPK5ZmvqnqHGCW8CHWNzaoIq7E5FSskIZ0=', 'hashedpassword3'),
('Funke', 'Johnson', 'female', 'funke.johnson@example.com', '+2347012345681', 'Ekiti', 'Nigeria', 'https://media.istockphoto.com/id/1487228852/photo/young-beautiful-woman-drinks-water-during-class-dehydration.webp?b=1&s=170667a&w=0&k=20&c=zb8eDnnSg95MVgjVb0PsGQ_XwPl8eSlJfNjok7mzxWs=', 'hashedpassword4'),
('Yusuf', 'Musa', 'male', 'yusuf.musa@example.com', '+2347012345682', 'Kano', 'Nigeria', 'https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.webp?b=1&s=170667a&w=0&k=20&c=7ULkaoeTcq3NKaiw0anIFqG0JKXEvbaMHwUbT4BGl4Y=', 'hashedpassword5'),
('Bola', 'Akinola', 'female', 'bola.akinola@example.com', '+2347012345683', 'Osun', 'Nigeria', 'https://media.istockphoto.com/id/1498431889/photo/studio-portrait-of-a-young-white-men-in-a-beige-shirt-against-a-gray-background.webp?b=1&s=170667a&w=0&k=20&c=n-4lw9VqK3fKj2f6fc8Rilf7Yk7miZqYcJfq2k0zK0w=', 'hashedpassword6'),
('Chuka', 'Eze', 'male', 'chuka.eze@example.com', '+2347012345684', 'Abia', 'Nigeria', 'https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.webp?b=1&s=170667a&w=0&k=20&c=74AEwolZAJPK5ZmvqnqHGCW8CHWNzaoIq7E5FSskIZ0=', 'hashedpassword7'),
('Ifeoma', 'Okezie', 'female', 'ifeoma.okezie@example.com', '+2347012345685', 'Anambra', 'Nigeria', 'https://media.istockphoto.com/id/1461077577/photo/spring-portrait-of-excited-young-woman.webp?b=1&s=170667a&w=0&k=20&c=Q3EUxr0Rpv1g4JJTdumH2IEb4marv2pCXZWZbBXuQa8=', 'hashedpassword8'),
('Tariq', 'Ali', 'male', 'tariq.ali@example.com', '+2347012345686', 'Niger', 'Nigeria', 'https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.webp?b=1&s=170667a&w=0&k=20&c=7ULkaoeTcq3NKaiw0anIFqG0JKXEvbaMHwUbT4BGl4Y=', 'hashedpassword9'),
('Damilola', 'Alabi', 'female', 'damilola.alabi@example.com', '+2347012345687', 'Ekiti', 'Nigeria', 'https://media.istockphoto.com/id/1487228852/photo/young-beautiful-woman-drinks-water-during-class-dehydration.webp?b=1&s=170667a&w=0&k=20&c=zb8eDnnSg95MVgjVb0PsGQ_XwPl8eSlJfNjok7mzxWs=', 'hashedpassword10');


-- Create user sessions
CREATE TABLE `users_sessions` (
  `session_id` varchar(128) NOT NULL,
  `expires` datetime NOT NULL,
  `data` longtext NOT NULL,
  PRIMARY KEY (`session_id`)
);


INSERT INTO users_sessions (session_id, expires, data) VALUES ('test_id', NOW() + INTERVAL 1 DAY, 'test_data');

SELECT * FROM users_sessions;