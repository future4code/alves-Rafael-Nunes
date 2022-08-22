-- a)DATE representa uma data
-- a.1)CARCHAR() representa strings e dentro dos parenteses é definido um numero maximo de caracteres

-- b)SHOW DATABASES mostra o schema da tabela
-- b.1) SHOW TABLE mostra a tabela do schgema

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

-- describe Actor

-- c) Retorna a estrutura da tabela

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

-- show table

-- 2)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
-- b) entrada duplicada para chave

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);
