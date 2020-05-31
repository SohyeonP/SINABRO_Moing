CREATE TABLE user (
  user_id int auto_increment PRIMARY KEY,
  user_email varcharacter(255),
  user_pw varcharacter(255),
  user_name varcharacter(255),
  role int,
  token varcharacter(255),
  tokenExp int,
  user_img text,
  user_introduce text
);

CREATE TABLE studyfind (
  studyfind_id int auto_increment PRIMARY KEY,
  create_date datetime,
  room_name varcharacter(255),
  host_name varcharacter(255),
  title_img MEDIUMBLOB NOT NULL,
  box_img MEDIUMBLOB NOT NULL,
  coding boolean,
  english boolean,
  second_language boolean,
  design boolean,
  toeic boolean,
  etc boolean,
  join_in int,
  introduce text
);
CREATE TABLE comment (
comment_id int auto_increment PRIMARY KEY,
user_id varcharacter(255),
comment_content varcharacter(255),
like_thumb int,
reg_date datetime
);

CREATE TABLE reply(
reply_no int auto_increment PRIMARY KEY,
comment_no int,
user_id varcharacter(255),
reply_comment varcharacter(255),
reg_date datetime
);
