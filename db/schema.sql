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
    jobTitle VARCHAR(100),
    id INT AUTO_INCREMENT,
    deptId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (deptId) REFERENCES department(id)
);

CREATE TABLE manager (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    salary NUMBER,
    roleId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (roleId) REFERENCES deptRole(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    salary NUMBER,
    roleId INT,
    managerId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (roleId) REFERENCES deptRole(id),
    FOREIGN KEY (managerId) REFERENCES manager(id)
);