create schema if not exists twttr collate utf8_general_ci;

create table if not exists user
(
	id int auto_increment
		primary key,
	username varchar(50) not null,
	password varchar(200) not null,
	name varchar(100) not null,
	email varchar(100) not null,
	constraint user_email_uindex
		unique (email),
	constraint user_username_uindex
		unique (username)
);

create table if not exists tweet
(
	id int auto_increment
		primary key,
	body varchar(255) not null,
	created_at datetime not null,
	user_id int null,
	constraint tweet_user_id_fk
		foreign key (user_id) references user (id)
			on update cascade on delete cascade
);
