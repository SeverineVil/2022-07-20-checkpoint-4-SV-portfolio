CREATE DATABASE IF NOT EXISTS `SV-portfolio`;
USE `SV-portfolio`;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE,
  `password` varchar(255) NOT NULL,
   `role` varchar(255)
  
  );

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` varchar(255),
  `url` varchar(2048),
  `categoryId` int,
  `techId` int,
  `createdAt` datetime
);

DROP TABLE IF EXISTS `technology`;
CREATE TABLE `technology` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `icon` varchar(255)
);

DROP TABLE IF EXISTS `category`;
CREATE TABLE `tech` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `ìmage` icons(255),
);
  
ALTER TABLE `projects` ADD FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

ALTER TABLE `projects` ADD FOREIGN KEY (`techId`) REFERENCES `tech` (`id`);

INSERT INTO user (email, password, role) VALUES 
("severinevilleneuve@gmail.com", "$2y$10$OAthdG/cGOlL7c6HMq8kyeWnXaxgfux8zdYcjqTEV4sIejqDYXfCK", "ROLE_ADMIN"),
