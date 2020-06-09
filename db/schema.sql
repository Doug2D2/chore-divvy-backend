-- Database: chore_divvy

-- DROP DATABASE chore_divvy;

CREATE DATABASE chore_divvy
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	CREATE SEQUENCE user_id_seq;
	
	CREATE TABLE users (
        id  INTEGER DEFAULT NEXTVAL('user_id_seq') NOT NULL,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(80) NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        created_at DATE,
        updated_at DATE,
        PRIMARY KEY(id)
    );

	CREATE SEQUENCE categories_id_seq;

    CREATE TABLE categories (
        id INTEGER DEFAULT NEXTVAL('categories_id_seq') NOT NULL,
        category_name VARCHAR(30) NOT NULL,
        user_id INTEGER[],
        created_at DATE,
        updated_at DATE,
        PRIMARY KEY(id)
    );

    CREATE SEQUENCE freq_id_seq;

    CREATE TABLE frequency (
        id INTEGER DEFAULT NEXTVAL('freq_id_seq') NOT NULL,
        frequency_name VARCHAR(25) NOT NULL,
        created_at DATE,
        updated_at DATE,
        PRIMARY KEY (id)
    );

    CREATE SEQUENCE chores_id_seq;

    CREATE TABLE chores (
        id INTEGER DEFAULT NEXTVAL('chores_id_seq') NOT NULL,
        chore_name VARCHAR(25) NOT NULL,
        status VARCHAR(255) NOT NULL,
        date_completed DATE,
        frequency_id INTEGER,
        category_id INTEGER NOT NULL,
        assignee_id INTEGER,
        difficulty TEXT,
        notes TEXT,
        created_at DATE,
        updated_at DATE,
        PRIMARY KEY (id),
        FOREIGN KEY (frequency_id) REFERENCES frequency(id),
        FOREIGN KEY (category_id) REFERENCES categories(id),
        FOREIGN KEY (assignee_id) REFERENCES users(id)
    );
