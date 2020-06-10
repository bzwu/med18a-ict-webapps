create database if not exists pizza;
use pizza;

DROP USER IF EXISTS 'pizza'@'localhost';
CREATE USER 'pizza'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass123';
GRANT SELECT ON pizza.* TO 'pizza'@'localhost';
GRANT INSERT ON pizza.* TO 'pizza'@'localhost';


SET FOREIGN_KEY_CHECKS=0;
drop table if exists Pizzen;
drop table if exists Zutaten;
drop table if exists PizzaZutaten;
drop table if exists Verkaufshistory;
SET FOREIGN_KEY_CHECKS=1;

create table Zutaten (
	id int not null primary key auto_increment,
    name varchar(50) not null
) ENGINE=INNODB;

create table Pizzen (
	id int not null primary key auto_increment,
    name varchar(50) not null,
    preis int not null
) ENGINE=INNODB;

create table PizzaZutaten (
	pizza int not null,
    zutat int not null,
    foreign key (pizza) references Pizzen(id) on delete cascade,
    foreign key (zutat) references Zutaten(id) on delete restrict
) ENGINE=INNODB;

create table Verkaufshistory (
	datum datetime not null,
    pizza int not null,
    anzahl int not null,
    bemerkung varchar(100),
    foreign key (pizza) references Pizzen(id) on delete cascade
) ENGINE=INNODB;

insert into Zutaten (name) VALUES ("Tomaten"), ("Mozzarella"), ("Schinken"), ("Champignons"), ("Peperoncini");
insert into Pizzen (name, preis) VALUES ("Margherita", 12), ("Prosciutto", 14), ("Prosciutto e Funghi", 15), ("Piccante", 14);
insert into pizzazutaten (pizza, zutat) VALUES (1, 1), (1, 2), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3), (3, 4), (4, 1), (4, 2), (4, 3), (4, 5);
insert into verkaufshistory (datum, pizza, anzahl, bemerkung) VALUES ('2020-04-12 20:03:36', 1, 3, "Tim telefonisch"), ('2020-04-12 20:03:36', 3, 2, "Tisch 2"), ('2020-05-29 14:33:02', 2, 1, "Tisch 2"), ('2020-05-29 14:33:02', 3, 1, "Tisch 4");