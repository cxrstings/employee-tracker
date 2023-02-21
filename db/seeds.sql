INSERT INTO department (deptName)
    VALUES ('test');

INSERT INTO deptRole (jobTitle)
    VALUES ('Testing');

INSERT INTO manager (firstName, lastName, salary)
    VALUES ('Jane', 'Doe', 50000);

INSERT INTO employee (firstName, lastName, salary)
    VALUES ('John', 'Deer', 25000);

SELECT * FROM department
JOIN deptRole ON 