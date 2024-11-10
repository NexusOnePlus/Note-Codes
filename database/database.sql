CREATE DATABASE codes;

USE codes;

CREATE TABLE hackerank (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    solution TEXT,
    original TEXT
);
CREATE TABLE codeforces (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    solution TEXT,
    original TEXT
);
CREATE TABLE omegaup(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    solution TEXT,
    original TEXT
);

INSERT INTO hackerank(name, description) VALUES ('sum', 'idk');
INSERT INTO codeforces(name, description) VALUES ('sum', 'idk');
INSERT INTO omegaup(name, description) VALUES ('sum', 'idk');