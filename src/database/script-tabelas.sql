create database CubeRPG;

use CubeRPG;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(245) unique,
senha varchar(12)
);

create table Quiz(
idQuiz int primary key auto_increment,
nome varchar(45),
categoria varchar(45),
nivel varchar(45),
constraint nivel check(nivel in('Fácil','Médio','Difícil'))
);

create table Feedback(
idFeedback int primary key auto_increment,
autor varchar(45),
assunto varchar(45),
textoFeedback varchar(150),
fkUsuario int,

foreign key (fkUsuario) references Usuario(idUsuario)
);

create table PartidaQuiz(
idPartida int,
fkUsuario int,
fkQuiz int,
pontuacao int,
dataJogada datetime,

foreign key (fkUsuario) references Usuario(idUsuario),
foreign key (fkQuiz) references Quiz(idQuiz),
constraint pkAssociativa primary key (IdPartida, fkUsuario, fkQuiz)
);

insert into Quiz values 
(default, 'Desafio dos Dados', 'RPGs no geral', 'Fácil');

-- Visualização das tabelas --
select*from Usuario;
select*from Feedback;
select*from PartidaQuiz;
