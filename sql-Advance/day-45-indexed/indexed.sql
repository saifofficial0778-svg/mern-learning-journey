use college;
CREATE TABLE customers (
    customer_id INT PRIMARY KEY, -- Auto Indexed
    customer_name VARCHAR(100),
    email VARCHAR(150),          -- Logins ke liye ispar search hoga
    mobile_number VARCHAR(15)    -- Search by phone ke liye use hoga
);

insert into customers
values
(1,"saif","saif@gmail.com","9027370778");

CREATE INDEX idx_customers_email
on customers(email);

EXPLAIN SELECT * FROM customers 
WHERE email='saif@gmail.com';
use company;
drop table customer;
select * from order1;

