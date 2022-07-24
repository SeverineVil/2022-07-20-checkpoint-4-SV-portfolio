CREATE DATABASE IF NOT EXISTS SV-portfolio;
USE sv-portfolio;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) UNIQUE,
  password varchar(255) NOT NULL,
   role varchar(255)
  
  );

DROP TABLE IF EXISTS project;
CREATE TABLE project (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  description varchar(255),
  url varchar(2048),
  categoryId int,
  techId int,
  createdAt datetime
);

DROP TABLE IF EXISTS technology;
CREATE TABLE technology (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  icon varchar(255)
);

DROP TABLE IF EXISTS category;
CREATE TABLE tech (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  );
  
ALTER TABLE project ADD FOREIGN KEY (categoryId) REFERENCES category (id);

ALTER TABLE project ADD FOREIGN KEY (techId) REFERENCES tech (id);

INSERT INTO user (email, password, role) VALUES 
("severinevilleneuve@gmail.com", "$2y$10$OAthdG/cGOlL7c6HMq8kyeWnXaxgfux8zdYcjqTEV4sIejqDYXfCK", "ROLE_ADMIN");

INSERT INTO project (name, description, url, image, categoryId ) VALUES
("Dear", "A website for Lila & Aline", "https://dear.nantes-1.wilders.dev/", "src/assets/projetDear.png", 2 ),
("La roue de la malchance", "Hackaton by team", "https://larouedelamalchance.netlify.app/", "src/assets/malchance.png", 1),
("Biorama", "A ReactJs website with public API", "https://biorama.netlify.app/", "src/assets/biorama.png", 2);

INSERT INTO category (name) VALUES("Hackaton"), ("Team's project"), ("Individual");

INSERT INTO technology (name, icon) VALUES 
("ReactJs", "src/assets/iconreact.png"),
("Javasript"),
("Node Express"),
("HTML-CSS");


