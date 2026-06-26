# Banking Management System Database Schema

This repository contains the Oracle SQL database schema and sample data scripts for a Banking Management System. The schema is designed to support PL/SQL programming exercises involving procedures, functions, triggers, cursors, exception handling, and packages.

## Database Schema

The database consists of the following tables:

### 1. Customers

Stores customer information.

| Column       | Data Type     | Description                 |
| ------------ | ------------- | --------------------------- |
| CustomerID   | NUMBER        | Primary key                 |
| Name         | VARCHAR2(100) | Customer name               |
| DOB          | DATE          | Date of birth               |
| Balance      | NUMBER        | Customer balance            |
| LastModified | DATE          | Last modification timestamp |

---

### 2. Accounts

Stores bank account details.

| Column       | Data Type    | Description                       |
| ------------ | ------------ | --------------------------------- |
| AccountID    | NUMBER       | Primary key                       |
| CustomerID   | NUMBER       | Foreign key referencing Customers |
| AccountType  | VARCHAR2(20) | Type of account                   |
| Balance      | NUMBER       | Account balance                   |
| LastModified | DATE         | Last modification timestamp       |

---

### 3. Transactions

Stores account transaction records.

| Column          | Data Type    | Description                      |
| --------------- | ------------ | -------------------------------- |
| TransactionID   | NUMBER       | Primary key                      |
| AccountID       | NUMBER       | Foreign key referencing Accounts |
| TransactionDate | DATE         | Transaction date                 |
| Amount          | NUMBER       | Transaction amount               |
| TransactionType | VARCHAR2(10) | Deposit or Withdrawal            |

---

### 4. Loans

Stores loan information.

| Column       | Data Type | Description                       |
| ------------ | --------- | --------------------------------- |
| LoanID       | NUMBER    | Primary key                       |
| CustomerID   | NUMBER    | Foreign key referencing Customers |
| LoanAmount   | NUMBER    | Loan amount                       |
| InterestRate | NUMBER    | Interest rate                     |
| StartDate    | DATE      | Loan start date                   |
| EndDate      | DATE      | Loan end date                     |

---

### 5. Employees

Stores employee information.

| Column     | Data Type     | Description     |
| ---------- | ------------- | --------------- |
| EmployeeID | NUMBER        | Primary key     |
| Name       | VARCHAR2(100) | Employee name   |
| Position   | VARCHAR2(50)  | Job position    |
| Salary     | NUMBER        | Employee salary |
| Department | VARCHAR2(50)  | Department      |
| HireDate   | DATE          | Hiring date     |

---

## Entity Relationship Overview

* One Customer can have multiple Accounts.
* One Customer can have multiple Loans.
* One Account can have multiple Transactions.
* Employees are maintained independently.

## Sample Data

The repository includes sample records for:

* Customers
* Accounts
* Transactions
* Loans
* Employees

These records can be used to test:

* PL/SQL Control Structures
* Exception Handling
* Stored Procedures
* Functions
* Triggers
* Explicit Cursors
* Packages

## Requirements

* Oracle Database (11g or later)
* SQL*Plus, SQL Developer, or any Oracle-compatible client

## Usage

1. Execute the schema creation script.
2. Execute the sample data insertion script.
3. Run PL/SQL programs, procedures, functions, triggers, and packages using the created schema.


