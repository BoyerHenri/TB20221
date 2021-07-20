-- Si existe détruit la base
DROP DATABASE if EXISTS Exo001;
CREATE DATABASE Exo001;
-- Pointe sur la base
USE Exo001;

-- Creation des tables 
CREATE TABLE Client (
	`cli_num` INT NOT NULL,
	`cli_nom` VARCHAR(50),
	`cli_adresse` VARCHAR(50),
	`cli_tel` VARCHAR(30),
	-- Keys
	PRIMARY KEY(`cli_num`)
);

CREATE TABLE Commande (
	`com_num` INT NOT NULL,
	`cli_num` INT NOT NULL,
	`com_date` DATETIME NOT NULL,
	`com_obs` VARCHAR(50),
	-- Keys
	FOREIGN KEY (cli_num) REFERENCES Client(cli_num),
	PRIMARY KEY(`com_num`)
);

CREATE TABLE Produit (
	`pro_num` INT NOT NULL,
	`pro_libelle` VARCHAR(50),
	`pro_description` VARCHAR(50),
	-- Keys
	PRIMARY KEY(`pro_num`)
);

CREATE TABLE est_compose (
	`com_num` INT NOT NULL,
	`pro_num` INT NOT NULL,
	`est_qte` INT,
	-- Keys
	PRIMARY KEY(com_num,pro_num),
	FOREIGN KEY (com_num) REFERENCES Commande(com_num),
	FOREIGN KEY (pro_num) REFERENCES Produit(pro_num)
);

-- Création de l'index 
CREATE INDEX cli_nom_Index ON client(cli_nom);
