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
-- Table `Application`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Application` ;

CREATE TABLE IF NOT EXISTS `Application` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS appuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'appuser'@'localhost';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'appuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Application`
-- -----------------------------------------------------
START TRANSACTION;
USE `appdb`;
INSERT INTO `Application` (`id`, `name`) VALUES (1, 'Testapp');

COMMIT;

