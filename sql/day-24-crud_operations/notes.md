# Day 24: SQL CRUD (Update & Delete), Sorting, Pagination & Search

This notes file covers the core SQL operations required for Managing ERP systems, along with production-level interview questions.

---

## 1. UPDATE SET WHERE

The `UPDATE` statement is used to modify existing records in a database table.

### 🚀 ERP Context
In an HR module, when a department gets a salary appraisal, we use `UPDATE`. For example, giving a 10% raise to the 'Engineering' department:

```sql
UPDATE employees 
SET salary = salary * 1.10 
WHERE department = 'Engineering';
⚠️ Interview & Production Watchouts
The "No-WHERE" Disaster: If you run an UPDATE query without a WHERE clause, it will update every single row in the database. In production, this can accidentally change the salaries of the entire company, including the CEO.

Row Locking (Concurrency Issue): Running a huge UPDATE on millions of rows applies an Exclusive Lock on those rows. Other ERP users won't be able to access or modify those rows, making the system slow or unresponsive.

Solution: Update massive datasets in smaller chunks or batches (e.g., 5,000 rows at a time) inside a loop to keep the database free for other users.

Crash Recovery (ACID - Atomicity): If a batch update crashes midway (e.g., at row 120,000 inside a 500,000 batch), the database uses Undo Logs to rollback the entire uncommitted batch to 0. It follows the "All or Nothing" rule. We can maintain an application-level log table to safely resume from the failed batch.

2. DELETE FROM WHERE
The DELETE statement permanently removes records from a table.

🚀 ERP Context
Purging old, expired, or canceled shopping carts older than 1 year to free up server space:

SQL
DELETE FROM orders 
WHERE status = 'Canceled' AND order_date < NOW() - INTERVAL 1 YEAR;
⚠️ Interview & Production Watchouts
DELETE vs TRUNCATE:

DELETE is a DML command. It deletes row-by-row, allows WHERE clauses, is slower, and generates Undo/Redo logs (can be rolled back).

TRUNCATE is a DDL command. It drops and recreates the entire table. It is extremely fast, does not allow a WHERE clause, and cannot be easily rolled back.

Soft Delete vs Hard Delete: Real-world ERPs almost never use hard delete (DELETE FROM). If a user accidentally deletes a client, the data is gone forever.

Solution: We use Soft Delete by adding an is_deleted (TINYINT/BOOLEAN) column. Clicking "Delete" simply fires an UPDATE table SET is_deleted = 1. The frontend filters active data using WHERE is_deleted = 0.

3. ORDER BY (Sorting & Performance)
Used to sort query results in Ascending (ASC) or Descending (DESC) order. The default sorting is always ASC.

🚀 ERP Context
A Warehouse Manager wants to see the most expensive orders first to prioritize their packaging:

SQL
SELECT * FROM erp_orders 
ORDER BY amount DESC;
⚠️ Interview & Production Watchouts
The Filesort Trap: Sorting millions of rows on an unindexed column is highly expensive. The database copies data into memory/disk to sort it physically, which is known as a Filesort. This spikes CPU utilization to 100%.

Solution: Create an Index on columns frequently used in sorting (e.g., CREATE INDEX idx_amount ON erp_orders(amount);).

Optimizer Choice: Even if an index is present, if you do SELECT * on a very small table (e.g., 5 rows), the database Query Optimizer might ignore the index and use Filesort because reading the index + looking up the rest of the columns takes more effort than scanning the tiny table directly.

4. LIMIT and OFFSET (Pagination)
LIMIT: Specifies the maximum number of rows to return.

OFFSET: Specifies how many rows to skip before returning data.

🚀 ERP Context
Displaying thousands of ledger transactions across pages (Pagination) so the frontend UI doesn't crash.

Page 1 (Show 2 rows, skip 0): SELECT * FROM erp_orders LIMIT 2 OFFSET 0;

Page 2 (Show 2 rows, skip 2): SELECT * FROM erp_orders LIMIT 2 OFFSET 2;

⚠️ Interview & Production Watchouts
The Offset Performance Trap: As the OFFSET value grows larger (e.g., LIMIT 10 OFFSET 500000), the query becomes extremely slow. The database still has to scan and read through those 500,000 rows only to discard them.

Solution (Cursor-Based Pagination): Instead of skipping rows using OFFSET, filter using the last seen ID from the previous page:

SQL
  SELECT * FROM erp_orders 
  WHERE order_id > 102 
  ORDER BY order_id ASC 
  LIMIT 2;
Since order_id is an indexed primary key, the database jumps directly to row 103 without scanning previous rows.

5. LIKE (Pattern Matching)
Used in a WHERE clause to search for a specific pattern using the % wildcard.

🚀 ERP Context
Searching for a customer record when the agent only remembers a part of their name.

Starts With: WHERE customer_name LIKE 'Rahul%' (Finds Rahul Sharma, Rahul Verma)

Ends With: WHERE customer_name LIKE '%Singh' (Finds Priya Singh)

Contains: WHERE customer_name LIKE '%mit%' (Finds Amit, Sumit, Pramit)

⚠️ Interview & Production Watchouts
Index Suffix vs Prefix:

LIKE 'Rahul%' can use database indexes because the starting character is known, allowing the database to jump to the 'R' section.

LIKE '%Sharma%' cannot use indexes because the starting point is unknown. The database must perform a slow Full Table Scan, reading all millions of records row-by-row.

Solution for Large Scale Search: For production ERP systems handling wildcard searches across millions of rows, standard SQL LIKE is replaced with Full-Text Search (FTS) Indexes or dedicated search engines like Elasticsearch.