--drops employee_db to start fresh--
DROP DATABASE IF EXISTS employee_db;
--create employee_db--
CREATE DATABASE employee_db;
--uses the employee_db--
USE employee_db;

CREATE TABLE department (
    deptName VARCHAR(100),
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE deptRole (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    roleId INT,
    managerId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (roleId) REFERENCES deptRole(id),
    FOREIGN KEY (managerId) REFERENCES employee(id)
);