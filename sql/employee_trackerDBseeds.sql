INSERT INTO department (name)
VALUES ("IT"), ("Accounting"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 90000, 1), ("Intern IT", 70000, 1), ("Helpdesk", 80000, 1), ("Accountant", 100000, 2), ("Accountant Lead", 100000, 2), ("Grad Accountant", 70000, 2), ("Head of Sales", 120000, 3), ("Sales Rep", 75000, 3), ("Sales casual", 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ellen", "Ripley", 1, null), ("Randle", "McMurphy", 2, null), ("Optimpus", "Prime", 3, null), ("Maximus", "Decimus", 4, null), ("Inspector", "Clouseau", 5, null), ("Inigo", "Montoya", 6, null), ("Ethan", "Hunt", 7, null), ("Corporal", "Hicks", 8, null), ("Roy", "Batty", 9, null);