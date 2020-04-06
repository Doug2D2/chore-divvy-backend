USE chore_divvy;

INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('obiONE_kanobi@email.com', 'password', 'Obione', 'Kanobi', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('TWOpac@email.com', 'password', 'Twopac', 'Shakur', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('thrice@email.com', 'password', 'Thrice', 'Times', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('quarter_lb@email.com', 'password', 'Mickey', 'D', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('real_houseFIVES_of_nj@email.com', 'password', 'Snooki', 'Five', '2020-01-01', '2020-01-01');

INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Personal', '{1}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Family Chores', '{1, 2, 3}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Mickeys Personal', '{4}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Me & hubby', '{4, 5}', '2020-01-01', '2020-01-01');

INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Daily', '2020-01-01', '2020-01-01');
INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Weekly', '2020-01-01', '2020-01-01');
INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Bi-Weekly', '2020-01-01', '2020-01-01');
INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Monthly', '2020-01-01', '2020-01-01');
INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Quarterly', '2020-01-01', '2020-01-01');
INSERT INTO frequency (frequency_name, created_at, updated_at) VALUES ('Yearly', '2020-01-01', '2020-01-01');

INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, created_at, updated_at) 
VALUES ('Wash dishes', 'To do', 1, 2, 3, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, created_at, updated_at) 
VALUES ('Laundry', 'To do', 2, 4, 1, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, category_id, difficulty, created_at, updated_at) 
VALUES ('Organize pens', 'In progress', 1, 1, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, created_at, updated_at) 
VALUES ('Cut Grass', 'In progress', 3, 4, 5, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, category_id, difficulty, created_at, updated_at) 
VALUES ('Wash guest room sheets', 'In progress', 4, 1, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, difficulty, created_at, updated_at) 
VALUES ('Change oil in truck', 'Completed', 5, 3, 5, '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, category_id, difficulty, notes, created_at, updated_at) 
VALUES ('Make doctor appt', 'To do', 1, 1, 'Derm appt.', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, category_id, assignee_id, created_at, updated_at) 
VALUES ('Clean room', 'To do', 2, 3, '2020-01-01', '2020-01-01');





