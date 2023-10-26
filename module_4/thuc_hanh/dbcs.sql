create database book_film;
use book_film;

create table app_roles(
id int auto_increment primary key,
role_name varchar(45),
is_deleted int(1) default 0 
);

create table app_accounts(
id int auto_increment primary key,
username varchar(45) unique,
`password` varchar(255),
is_deleted int(1) default 0 
);

create table account_role(
account_id int,
role_id int,
primary key(account_id,role_id),
foreign key(account_id) references app_accounts(id),
foreign key(role_id) references app_roles(id)
);

create table times(
id int auto_increment primary key,
`time` int,
quantity_ticked int,
is_deleted int(1) default 0 
);

create table customers(
id int auto_increment primary key,
`name` varchar(45),
phone_number varchar(45),
email varchar(45),
address varchar(255),
account_id int,
foreign key(account_id) references app_accounts(id),
is_deleted int(1) default 0
);

create table employees(
id int auto_increment primary key,
`name` varchar(45),
phone_number varchar(45),
email varchar(50),
card varchar(45),
account_id int,
foreign key(account_id) references app_accounts(id),
is_deleted int(1) default 0
);

create table types_film(
id int primary key auto_increment,	
`name` varchar(45),
is_deleted int(1) default 0
);

create table films(
id int auto_increment primary key,
`name` varchar(100),
type_film_id int,
foreign key(type_film_id) references types_film(id),
content text,
`time` int,
price int,
is_deleted int(1) default 0
);

create table bookings(
id int auto_increment primary key,
date_booking date,
deposit int,
quantity int,
customer_id int,
film_id int,
time_id int,
employee_id int,
foreign key(customer_id) references customers(id),
foreign key(film_id) references films(id),
foreign key(time_id) references times(id),
foreign key(employee_id) references employees(id),
is_deleted int(1) default 0
);