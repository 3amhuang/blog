create table user (
  id int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar(255) NOT NULL,
  avatar varchar(255)
  phone int(12) NOT NULL,
  email varchar(64),
  password varchar(255) NOT NULL,
  user_desc varchar(255) NOT NULL,
  social_id varchar(255),
  created_time datetime,
  updated_time datetime,
  deleted_time datetime,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
