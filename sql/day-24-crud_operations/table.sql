-- 1. ERP ki Orders Table banana
CREATE TABLE erp_orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    product_name VARCHAR(50),
    amount DECIMAL(10,2),
    status VARCHAR(20),
    is_deleted INT DEFAULT 0  -- Soft Delete ke liye column
);

-- 2. Isme dummy data insert karna
INSERT INTO erp_orders
 (order_id, customer_name, product_name, amount, status, is_deleted) 
 VALUES
(101, 'Rahul Sharma', 'Laptop', 75000.00, 'Delivered', 0),
(102, 'Amit Verma', 'Smartphone', 25000.00, 'Pending', 0),
(103, 'Priya Singh', 'Office Chair', 8500.00, 'Canceled', 0),
(104, 'Vikram Malhotra', 'Monitor', 15000.00, 'Delivered', 0),
(105, 'Sneha Reddy', 'Keyboard', 2500.00, 'Canceled', 0),
(106, 'Rohan Das', 'Mouse', 1200.00, 'Pending', 0);


update erp_orders
set amount = amount+500
where status="Pending";

update erp_orders
set is_deleted =1
where order_id=103;

select *from erp_orders;

delete from erp_orders
where status="Canceled" or is_deleted=1;

select *from erp_orders
order by amount desc;

select * from erp_orders
order by amount ;
SELECT * FROM erp_orders 
ORDER BY status ASC, amount DESC;

EXPLAIN SELECT * FROM erp_orders ORDER BY amount DESC;
-- amount column par ek Index banana
CREATE INDEX idx_amount ON erp_orders(amount);

select * from erp_orders
order by order_id asc
limit 2 offset 2;

SELECT * FROM erp_orders 
WHERE customer_name LIKE 'Rahul%';

select * from erp_orders
where customer_name like "%mit%";