USE chore_divvy;

INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('obiONE_kanobi@email.com', '$2b$10$pOSZFSYRx2XFyl/.KZDNa.OoWfi6vp2QbR5X3HIB9ytguTq6y/5sC', 'Obione', 'Kanobi', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('TWOpac@email.com', '$2b$10$pOSZFSYRx2XFyl/.KZDNa.OoWfi6vp2QbR5X3HIB9ytguTq6y/5sC', 'Twopac', 'Shakur', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('thrice@email.com', '$2b$10$pOSZFSYRx2XFyl/.KZDNa.OoWfi6vp2QbR5X3HIB9ytguTq6y/5sC', 'Thrice', 'Times', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('quarter_lb@email.com', '$2b$10$pOSZFSYRx2XFyl/.KZDNa.OoWfi6vp2QbR5X3HIB9ytguTq6y/5sC', 'Mickey', 'D', '2020-01-01', '2020-01-01');
INSERT INTO users (username, password, first_name, last_name, created_at, updated_at) VALUES ('real_houseFIVES_of_nj@email.com', '$2b$10$pOSZFSYRx2XFyl/.KZDNa.OoWfi6vp2QbR5X3HIB9ytguTq6y/5sC', 'Snooki', 'Five', '2020-01-01', '2020-01-01');

INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Personal', '{1}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Family Chores', '{1, 2, 3}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Mickeys Personal', '{4}', '2020-01-01', '2020-01-01');
INSERT INTO categories (category_name, user_id, created_at, updated_at) VALUES ('Me & hubby', '{4, 5}', '2020-01-01', '2020-01-01');

INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Daily', '2020-01-01', '2020-01-01');
INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Weekly', '2020-01-01', '2020-01-01');
INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Bi-Weekly', '2020-01-01', '2020-01-01');
INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Monthly', '2020-01-01', '2020-01-01');
INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Quarterly', '2020-01-01', '2020-01-01');
INSERT INTO frequencies (frequency_name, created_at, updated_at) VALUES ('Yearly', '2020-01-01', '2020-01-01');

INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Wash dishes', 'To Do', 1, 2, 5, 'Easy', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Laundry', 'To Do', 2, 4, 4, 'Easy', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Organize pens', 'In Progress', 1, 1, 1, 'Medium', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Cut Grass', 'In Progress', 3, 4, 2, 'Hard', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Wash guest room sheets', 'In Progress', 4, 1, 1, 'Easy', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Change oil in truck', 'Completed', 5, 3, 3, 'Medium', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, notes, created_at, updated_at) 
VALUES ('Make doctor appt', 'To Do', 1, 1, 2, 'Easy', 'Derm appt.', '2020-01-01', '2020-01-01');
INSERT INTO chores (chore_name, status, frequency_id, category_id, assignee_id, difficulty, created_at, updated_at) 
VALUES ('Clean room', 'To Do', 2, 3, 1, 'Easy', '2020-01-01', '2020-01-01');
