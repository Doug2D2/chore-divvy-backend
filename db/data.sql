USE chore_divvy;

INSERT INTO users (username, password, first_name, last_name) VALUES ('obiONE_kanobi@email.com', 'password', 'Obione', 'Kanobi');
INSERT INTO users (username, password, first_name, last_name) VALUES ('TWOpac@email.com', 'password', 'Twopac', 'Shakur');
INSERT INTO users (username, password, first_name, last_name) VALUES ('thrice@email.com', 'password', 'Thrice', 'Times');
INSERT INTO users (username, password, first_name, last_name) VALUES ('quarter_lb@email.com', 'password', 'Mickey', 'D');
INSERT INTO users (username, password, first_name, last_name) VALUES ('real_houseFIVES_of_nj@email.com', 'password', 'Snooki', 'Five');

INSERT INTO categories (category_name, user_id) VALUES ('Personal', '{1}');
INSERT INTO categories (category_name, user_id) VALUES ('Family Chores', '{1, 2, 3}');
INSERT INTO categories (category_name, user_id) VALUES ('Mickeys Personal', '{4}');
INSERT INTO categories (category_name, user_id) VALUES ('Me & hubby', '{4, 5}');

INSERT INTO frequency (frequency_name) VALUES ('Daily');
INSERT INTO frequency (frequency_name) VALUES ('Weekly');
INSERT INTO frequency (frequency_name) VALUES ('Bi-Weekly');
INSERT INTO frequency (frequency_name) VALUES ('Monthly');
INSERT INTO frequency (frequency_name) VALUES ('Quarterly');
INSERT INTO frequency (frequency_name) VALUES ('Yearly');

INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Wash dishes', 'To do', );
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Laundry', 'To do');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Organize pens', 'In progress');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Cut Grass', 'In progress');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Wash guest room sheets', 'In progress');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Change oil in truck', 'To do');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Make doctor appt', 'To do');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Clean room', 'To do');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Wash dishes', 'To do');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, notes) 
VALUES ('Wash dishes', 'To do');



