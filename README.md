# 🚀 MERN Learning Journey

Welcome to my learning tracker! This repository documents my daily practice, notes, projects, and architectural experiments as I transition into a Full Stack Web Developer.

---

## 📂 Folder Structure

    javascript/        # Core, Advanced Async, and OOP JS concepts
    sql/               # Database queries, relational schemas, and ERP design
    json/              # Data formats and configurations
    mini-projects/     # Hands-on projects built step-by-step

---

## 💻 Technologies & Tools

- **Languages & Core:** JavaScript (ES6+), SQL (MySQL), JSON
- **Database Architecture:** Relational DB Design, Schema Engineering
- **Backend Architecture (Learning):** Node.js, Express.js, MongoDB, MVC Pattern
- **Frontend (Learning):** React.js
- **Tools:** VS Code, Git, GitHub, MySQL Workbench

---

## 📘 JavaScript Deep Dive

### 🟢 Fundamentals (Week 1)
- **Variables & Basics:** `var` vs `let` vs `const`, Data Types (`string`, `number`, `boolean`, `null`, `undefined`), `typeof` operator, Template literals, String methods (`length`, `slice`, `includes`, `toUpperCase`), `console.log`, Comments
- **Control Flow:** `if / else if / else`, Ternary operator, `switch case`, Loops (`for`, `while`, `do-while`), `break` & `continue`
- **Functions:** Function declaration vs expression, Arrow functions `() => {}`, Default + rest parameters, Return values

### 🟡 Advanced Mechanics & Async JS (Week 2)
- **Execution Context:** Engine mechanics, Call Stack (LIFO workflow), Scope chain, Scope (local vs global)
- **Hoisting & TDZ:** Parsing behavior of variables/functions, Temporal Dead Zone mitigation
- **Closures:** Function nesting, Lexical scoping, Practical use cases (counters, private variables), IIFE (Immediately Invoked Function Expressions)
- **Prototypes:** Prototype chain, `__proto__` vs `prototype` property, `Object.create()`, Manual prototype inheritance, `hasOwnProperty`
- **Event Loop:** Asynchronous JS engine, Call Stack + Web APIs + Callback Queue, Microtask queue vs Macrotask queue, `setTimeout`/`setInterval` internals
- **Promises & Async-Await:** Callbacks vs Callback Hell, Promise states (resolve, reject, `.then`, `.catch`), Promise chaining, Parallel execution (`Promise.all`, `Promise.race`), Syntactic sugar with `async/await`, API error handling (`try/catch/finally`) via Fetch API (GET/POST)

### 🔵 Object-Oriented Programming & Architectural Patterns (Week 3)
- **OOP Core:** 4 Pillars Overview, `class` & `constructor` syntax, Object instantiation with `new` keyword, Context resolution with `this` keyword, Instance methods & properties
- **Encapsulation:** Protecting data using Private fields (`#`), Getters and Setters, Static methods and properties, Data validation inside constructors
- **Inheritance:** Superclass derivation with `extends`, Parent constructor referencing via `super()`
- **Polymorphism:** Method overriding (e.g., dynamic `.getDashboard()` generation across child classes), Typology mapping with `instanceof`
- **MVC Pattern:** Model-View-Controller decoupling philosophy, Clean codebase structuring (`models/`, `views/`, `controllers/`), Wireframe lifecycle orchestration via `index.js`

---

## 🛠 SQL & Database Architecture (Week 4)

### 📦 Setup & Relational Fundamentals
- Relational DB Paradigms (Tables, Rows, Columns concepts)
- MySQL Installation & Workbench configuration
- Data Typing (`INT`, `VARCHAR`, `DATE`, `BOOLEAN`, `DECIMAL`)
- Database Creation & Administration

### 📊 CRUD Operations & Filtering
- **Create & Read:** `CREATE TABLE`, Constraints (`PRIMARY KEY`, `NOT NULL`, `DEFAULT`), `INSERT INTO` mutation, Read queries (`SELECT * FROM`), Conditional filtering (`WHERE` clause)
- **Advanced Filtering & Ordering:** Sorting arrays (`ORDER BY ASC/DESC`), Pagination controls (`LIMIT`, `OFFSET`), Structural wildcards (`LIKE` searches with `%`)
- **Update & Delete:** Target mutations using `UPDATE SET WHERE` and `DELETE FROM WHERE`

### 🔗 Joins & Schema Design
- **Relationships:** Establishing structural constraints using `FOREIGN KEY`, Designing One-to-Many configurations (Class ➔ Students)
- **Table Intersections:** Cross-referencing tables via `INNER JOIN` (matching entries) and `LEFT JOIN` (all records from primary table)
- **Complex Topologies:** Designing Many-to-Many architectures using Junction tables (`students_subjects`)
- **Data Aggregation:** Computing insights with `COUNT`, `SUM`, `AVG`, `MAX`, `MIN`, Categorical segregation with `GROUP BY`, Aggregate constraints using the `HAVING` clause
- **ERP Schema Blueprinting:** Engineering a production-ready school ERP schema encompassing `users`, `students`, `teachers`, `classes`, `fees`, and `attendance` tables

---

## 📌 Completed Mini Projects

### 🧮 1. Student Grade Calculator (Week 1 Project)
- **Core Focus:** Array manipulation & procedural logic.
- **Implementation:** Processes student entities, dynamically maps mark metrics to deduce average scores, assigns systematic grades, conditions pass/fail markers, isolates top performers, and prints a cleanly formatted console dashboard.

### ⚡ 2. Async Fee Status Checker (Week 2 Project)
- **Core Focus:** Asynchronous state simulation.
- **Implementation:** Mimics remote API responses using Promise structures combined with `setTimeout`. Employs `async/await` to capture and render student payment tracking statuses, processing dynamic loading states and catch-block exceptions natively.

### 🏫 3. School OOP System under MVC (Week 3 Project)
- **Core Focus:** Structural design patterns & Polymorphism.
- **Implementation:** Models user hierarchies (`User` ➔ `Student`/`Teacher`/`Admin`) with variant polymorphic dashboards using `extends`. Codes the infrastructure cleanly under explicit Model-View-Controller folders to build, query, and modify entities on an in-memory runtime array tracking system.

---

## 🎯 Current Status & Next Steps

- **Month 1 Roadmap:** Completed 100% (Basics ➔ Advanced Async ➔ OOP ➔ MVC ➔ Relational Database Engineering) ✅
- **Current Practice:** Code optimization, schema validation queries, and refactoring structural folders.
- **Next Horizon:** Stepping into the Node.js runtime environment, Express server construction, and NoSQL integration (MongoDB) to begin building Full Stack MERN projects.

---

⚡ **Consistency > Perfection**
