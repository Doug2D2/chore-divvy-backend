CREATE DATABASE IF NOT EXISTS chore_divvy;
USE chore_divvy;

CREATE TABLE users (
    id  INT(10) NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE categories (
    id INT(10) NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    user_id INT(10),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE chores (
    id INT(10) NOT NULL AUTO_INCREMENT,
    chore_name VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    date_completed DATE,
    frequency_id INT(10) NOT NULL,
    category_id INT(10) NOT NULL,
    difficulty INT(1),
    notes VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (frequency_id) REFERENCES frequency(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE frequency (
    id INT(10) NOT NULL AUTO_INCREMENT,
    frequency_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
