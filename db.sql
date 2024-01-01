CREATE DATABASE node_mysql;

CREATE TABLE IF NOT EXISTS `employee` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `organization` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(100) NOT NULL,
    `salary` DECIMAL(11, 2) UNSIGNED DEFAULT 0.00,
    `status` TINYINT UNSIGNED DEFAULT 0,
    `is_deleted` TINYINT UNSIGNED DEFAULT 0,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
)
ENGINE = InnoDB;

INSERT INTO `node_mysql`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `desination`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John','Doe', 'johndoe@gmail.com', '1234567890', 'Microsoft', 'Full Stack Developer', '500000', '1', '0', '2020-18-07 15:30:30');

INSERT INTO `node_mysql`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `desination`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Jane','Doe', 'janedoe@gmail.com', '9876543210', 'Google', 'Software Engineer', '44500', '1', '0', '2020-18-07 15:30:30');




INSERT INTO `node_mysql`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John','Doe', 'johndoe@gmail.com', '1234567890', 'Microsoft', 'Full Stack Developer', '500000', '1', '0', '2020-18-07 15:30:30');

INSERT INTO `node_mysql`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Jane','Doe', 'janedoe@gmail.com', '9876543210', 'Google', 'Software Engineer', '44500', '1', '0', '2020-18-07 15:30:30');