create database auxiliatron;

use auxiliatron;

create table users(
  id serial primary key,
  name varchar (250) not null,
  lastname varchar (250) not null,
  code int,
  username varchar (250) not null
);

create table subject(
  id int primary key,
  name varchar (250) not null,
  description varchar (250) not null,
  credits int not null,
  proffesor varchar (250) not null
);
