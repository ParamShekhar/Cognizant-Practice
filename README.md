# Cognizant Practice

A collection of my solutions, practice exercises, and hands-on implementations completed as part of the Cognizant learning and training program. This repository primarily focuses on Oracle SQL and PL/SQL concepts, including database design, procedural programming, exception handling, triggers, cursors, packages, and other advanced database programming topics.

## Repository Structure

```text
Cognizant-Practice/
│
├── PLSQL_Exercises/
│   ├── Database Schema
│   ├── Sample Data
│   ├── Control Structures
│   ├── Exception Handling
│   ├── Stored Procedures
│   ├── Functions
│   ├── Triggers
│   ├── Explicit Cursors
│   └── Packages
│
└── README.md
```

---

## Topics Covered

### Oracle SQL

* Database Schema Design
* Table Creation
* Primary Keys and Foreign Keys
* Data Insertion
* Constraints
* Relationships

### PL/SQL Programming

* Anonymous Blocks
* Variables and Control Structures
* Conditional Statements
* Loops
* Exception Handling
* Stored Procedures
* Functions
* Triggers
* Explicit Cursors
* Packages

---

## Banking Management Database Schema

The exercises are based on a Banking Management System consisting of the following tables:

| Table        | Description                                |
| ------------ | ------------------------------------------ |
| Customers    | Stores customer information                |
| Accounts     | Stores account details                     |
| Transactions | Stores deposit and withdrawal transactions |
| Loans        | Stores customer loan information           |
| Employees    | Stores employee information                |

### Entity Relationships

* One Customer can own multiple Accounts.
* One Customer can have multiple Loans.
* One Account can have multiple Transactions.
* Employees are managed independently.

---

## Features Implemented

### Control Structures

* Senior citizen loan interest discounts
* Customer VIP status updates
* Loan payment reminders

### Exception Handling

* Safe fund transfer operations
* Employee salary updates
* Duplicate customer prevention

### Stored Procedures

* Monthly interest processing
* Employee bonus calculation
* Fund transfer management

### Functions

* Customer age calculation
* Loan EMI calculation
* Account balance validation

### Triggers

* Automatic last modified updates
* Transaction audit logging
* Deposit and withdrawal validation

### Explicit Cursors

* Monthly statement generation
* Annual maintenance fee deduction
* Loan interest rate updates

### Packages

* CustomerManagement
* EmployeeManagement
* AccountOperations

---

## Technologies Used

* Oracle Database
* Oracle SQL
* PL/SQL
* SQL Developer

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ParamShekhar/Cognizant-Practice.git
```

2. Execute the schema creation scripts.

3. Insert the sample data.

4. Run the PL/SQL procedures, functions, triggers, cursors, and package programs.

---

## Purpose

This repository serves as:

* A personal learning archive
* A reference for Oracle SQL and PL/SQL concepts
* Practice material for Cognizant training programs
* Preparation material for technical interviews and university coursework

---

## Author

**Param Shekhar**

GitHub: https://github.com/ParamShekhar

---

## License

This repository is maintained for educational and learning purposes.
