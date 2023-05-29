create database projetoindividual;
use projetoindividual;

create table usuraio (
id int primary key auto_increment,
nome varchar(100),
email varchar(45),
senha varchar(8)
);

create table vilao (
idVilao int primary key auto_increment,
poderCargaVilao int);

create table combatente (
idCombatente int primary key auto_increment,
cargaPoder float,
fkVilao int, 
constraint fkVilao foreign key (fkVilao) references vilao(idVilao)
);

insert into combatente values 
	(1, null, 1),
    (2, null, 1),
    (3, null, 1),
    (4, null, 1);
