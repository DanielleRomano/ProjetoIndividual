create database projetoindividual;
use projetoindividual;

create table usuario (
id int primary key auto_increment,
nome varchar(100),
email varchar(45),
senha varchar(8)
);

create table vilao (
idVilao int primary key auto_increment,
poderCargaVilao int
);

create table combatente (
idCombatente int primary key,
cargaPoder int,
fkVilao int, 
constraint fkVilao foreign key (fkVilao) references vilao(idVilao)
);

insert into combatente values 
	(1, null, 1),
    (2, null, 1),
    (3, null, 1),
    (4, null, 1);

create table plataforma (
idPlataforma int primary key auto_increment,
nome varchar(20),
descricao varchar(60),
autor varchar(40)
);

insert into plataforma values
	(null, 'POWER X', 'Site desenvolvido para projeto individual do primeiro semestre da SPTech School',
'Danielle dos Santos Romano');

create table jogos (
idJogos int primary key auto_increment,
nome varchar(80),
categoria varchar(20),
descricao varchar(80),
fkPlataforma int,
constraint fkPlataforma foreign key (fkPlataforma) references plataforma(idPlataforma)
);

insert into jogos values 
	(null, 'Ajude as meninas superpoderosas a combater o macaco Louco', 'Combate', 'Usuário selecione combatente e quantidade de poder do combatente para derrotar o vilão',
    1),
	(null, 'Ajude as meninas superpoderosas a arrumar o quarto', 'Jogo da memória', 'Usuário busca itens do quarto das meninas superpoderosas através do jogo da memória',
	1);
