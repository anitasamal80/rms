CREATE DATABASE contact;
create user appuser identified by 'appuser';
grant select, insert, update, delete on contact to appuser;

CREATE TABLE `contact`.`contact` (
  `id` INT NOT NULL,
  `name` VARCHAR(50) NULL,
  `email_id` VARCHAR(100) NULL,
  `telephone_no` INT NULL,
  `age` INT NULL,
  `comments` VARCHAR(2000) NULL,
  `visited_india` VARCHAR(45) NULL,
  `interest` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
