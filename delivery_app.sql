
create database delivery_app;
use delivery_app;
CREATE TABLE food_menu (
	id	int(8)	NOT NULL,
	price	int(8)	NOT NULL,
	menu_description	varchar(256)	NULL,
	menu_name	varchar(32)	NOT NULL
);


ALTER TABLE food_menu ADD CONSTRAINT PK_FOOD_MENU PRIMARY KEY (
	id
);

INSERT INTO food_menu VALUES (1, 500, '기름을 버무린 고무질감의 면', '알리오알리오');
INSERT INTO food_menu VALUES (null, 500, '기름을 버무린 고무질감의 면', '알리오알리오');
delete from food_menu;
select * from food_menu;

 ALTER USER 'delivery_app_db'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
 
 drop table food_menu;
 
 CREATE TABLE member (
	id	int(5)	NOT NULL,
	member_id	varchar(12)	NULL,
	nickname	varchar(18)	NULL,
	address	varchar(128)	NULL,
	email_address	varchar(64)	NULL,
	password	varchar(32)	NULL,
	password_salt	varchar(64)	NULL,
	phone_number	int(11)	NULL,
	join_date	datetime	NULL,
	total_orders	int(5)	NULL,
	member_point	int(8)	NULL
);

CREATE TABLE food_menu (
	id	int(8)	NOT NULL,
	price	int(5)	NULL,
	menu_description	varchar(256)	NULL,
	menu_name	varchar(32)	NULL
);

CREATE TABLE order_history (
	id	int(8)	NOT NULL,
	order_id	varchar(8)	NULL,
	order_date	datetime	NULL,
	total_amount	int(10)	NULL,
	delivery_tip	int(8)	NULL,
	payment_method	char(1)	NULL,
	member_uq_id	int(5)	NOT NULL,
	restaurant_uq_id	int(5)	NOT NULL
);

CREATE TABLE order_menu (
	food_menu_uq_id	int(8)	NOT NULL,
	order_history_uq_id	int(8)	NOT NULL
);

CREATE TABLE coupon (
	id	int(8)	NOT NULL,
	dicount_amount	int(10)	NULL,
	minimum_order_amount	int(6)	NULL,
	received_date	datetime	NULL,
	expiry_period	datetime	NULL
);

CREATE TABLE member_coupons (
	member_uq_id	int(5)	NOT NULL,
	coupon_uq_id	int(8)	NOT NULL
);

CREATE TABLE review (
	id	int(8)	NOT NULL,
	star_rating	int(1)	NULL,
	review_text	varchar(256)	NULL,
	member_uq_id	int(5)	NOT NULL
);

CREATE TABLE restaurant (
	id	int(5)	NOT NULL,
	restaurant_name	varchar(32)	NULL,
	minimum_order_amount	int(6)	NULL,
	delivery_tip	int(8)	NULL,
	restaurant_address	varchar(128)	NULL
);

CREATE TABLE restaurant_review (
	review_uq_id	int(8)	NOT NULL,
	restaurant_uq_id	int(5)	NOT NULL
);

CREATE TABLE restaurant_menu (
	restaurant_uq_id	int(5)	NOT NULL,
	food_menu_uq_id	int(8)	NOT NULL
);

ALTER TABLE member ADD CONSTRAINT PK_MEMBER PRIMARY KEY (
	id
);

ALTER TABLE food_menu ADD CONSTRAINT PK_FOOD_MENU PRIMARY KEY (
	id
);

ALTER TABLE order_history ADD CONSTRAINT PK_ORDER_HISTORY PRIMARY KEY (
	id
);

ALTER TABLE order_menu ADD CONSTRAINT PK_ORDER_MENU PRIMARY KEY (
	food_menu_uq_id,
	order_history_uq_id
);

ALTER TABLE coupon ADD CONSTRAINT PK_COUPON PRIMARY KEY (
	id
);

ALTER TABLE member_coupons ADD CONSTRAINT PK_MEMBER_COUPONS PRIMARY KEY (
	member_uq_id,
	coupon_uq_id
);

ALTER TABLE review ADD CONSTRAINT PK_REVIEW PRIMARY KEY (
	id
);

ALTER TABLE restaurant ADD CONSTRAINT PK_RESTAURANT PRIMARY KEY (
	id
);

ALTER TABLE restaurant_review ADD CONSTRAINT PK_RESTAURANT_REVIEW PRIMARY KEY (
	review_uq_id,
	restaurant_uq_id
);

ALTER TABLE restaurant_menu ADD CONSTRAINT PK_RESTAURANT_MENU PRIMARY KEY (
	restaurant_uq_id,
	food_menu_uq_id
);

