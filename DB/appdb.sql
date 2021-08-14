-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema appdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `appdb` ;

-- -----------------------------------------------------
-- Schema appdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `appdb` DEFAULT CHARACTER SET utf8 ;
USE `appdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `role` TINYINT NULL DEFAULT 0,
  `enabled` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `status` ;

CREATE TABLE IF NOT EXISTS `status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `application`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `application` ;

CREATE TABLE IF NOT EXISTS `application` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  `apply_date` DATE NULL,
  `deadline` DATE NULL,
  `link_to_job` VARCHAR(500) NULL,
  `description` VARCHAR(1000) NULL,
  `location` VARCHAR(500) NULL,
  `salary` DECIMAL NULL,
  `interview_date` DATE NULL,
  `job_title` VARCHAR(45) NULL,
  `status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_application_user_idx` (`user_id` ASC),
  INDEX `fk_application_status1_idx` (`status_id` ASC),
  CONSTRAINT `fk_application_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_application_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contact` ;

CREATE TABLE IF NOT EXISTS `contact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `email` VARCHAR(500) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `number` VARCHAR(45) NULL,
  `application_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contact_application1_idx` (`application_id` ASC),
  CONSTRAINT `fk_contact_application1`
    FOREIGN KEY (`application_id`)
    REFERENCES `application` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS appuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'appuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'appuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `appdb`;
INSERT INTO `user` (`id`, `username`, `password`, `role`, `enabled`) VALUES (1, 'admin', 'password', 1, 1);
INSERT INTO `user` (`id`, `username`, `password`, `role`, `enabled`) VALUES (2, 'badboy75', 'password', 0, 1);
INSERT INTO `user` (`id`, `username`, `password`, `role`, `enabled`) VALUES (3, 'theOnetrueking32', 'password', 0, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `status`
-- -----------------------------------------------------
START TRANSACTION;
USE `appdb`;
INSERT INTO `status` (`id`, `name`) VALUES (1, 'Not Started');
INSERT INTO `status` (`id`, `name`) VALUES (2, 'Applied');
INSERT INTO `status` (`id`, `name`) VALUES (3, 'Rejected');
INSERT INTO `status` (`id`, `name`) VALUES (4, 'Offer');
INSERT INTO `status` (`id`, `name`) VALUES (5, 'Accepted');

COMMIT;


-- -----------------------------------------------------
-- Data for table `application`
-- -----------------------------------------------------
START TRANSACTION;
USE `appdb`;
INSERT INTO `application` (`id`, `name`, `user_id`, `apply_date`, `deadline`, `link_to_job`, `description`, `location`, `salary`, `interview_date`, `job_title`, `status_id`) VALUES (1, 'Postman', 1, '2021-07-30', '2021-08-01', 'https://www.google.com', 'sweet', 'anyway', 120000, '2021-08-09', 'Developer', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `contact`
-- -----------------------------------------------------
START TRANSACTION;
USE `appdb`;
INSERT INTO `contact` (`id`, `first_name`, `email`, `last_name`, `number`, `application_id`) VALUES (1, 'Brandon', 'bstine@gams.com', 'Stine', '8675309', 1);
INSERT INTO `contact` (`id`, `first_name`, `email`, `last_name`, `number`, `application_id`) VALUES (2, 'Tim', 'Hartaway@hat.com', 'Hartaway', '293817274', 1);

COMMIT;

