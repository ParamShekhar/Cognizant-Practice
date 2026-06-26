-- Package Specification
CREATE OR REPLACE PACKAGE EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_employee_id   IN NUMBER,
        p_employee_name IN VARCHAR2,
        p_department    IN VARCHAR2,
        p_salary        IN NUMBER
    );

    PROCEDURE UpdateEmployeeDetails(
        p_employee_id   IN NUMBER,
        p_employee_name IN VARCHAR2,
        p_department    IN VARCHAR2,
        p_salary        IN NUMBER
    );

    FUNCTION CalculateAnnualSalary(
        p_employee_id IN NUMBER
    ) RETURN NUMBER;

END EmployeeManagement;
/
-- Package Body
CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    -- Procedure to hire a new employee
    PROCEDURE HireEmployee(
        p_employee_id   IN NUMBER,
        p_employee_name IN VARCHAR2,
        p_department    IN VARCHAR2,
        p_salary        IN NUMBER
    )
    IS
    BEGIN
        INSERT INTO Employees(
            EmployeeID,
            EmployeeName,
            Department,
            Salary
        )
        VALUES(
            p_employee_id,
            p_employee_name,
            p_department,
            p_salary
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Employee hired successfully.'
        );
    END HireEmployee;


    -- Procedure to update employee details
    PROCEDURE UpdateEmployeeDetails(
        p_employee_id   IN NUMBER,
        p_employee_name IN VARCHAR2,
        p_department    IN VARCHAR2,
        p_salary        IN NUMBER
    )
    IS
    BEGIN
        UPDATE Employees
        SET EmployeeName = p_employee_name,
            Department   = p_department,
            Salary       = p_salary
        WHERE EmployeeID = p_employee_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Employee details updated successfully.'
        );
    END UpdateEmployeeDetails;


    -- Function to calculate annual salary
    FUNCTION CalculateAnnualSalary(
        p_employee_id IN NUMBER
    )
    RETURN NUMBER
    IS
        v_salary NUMBER;
    BEGIN
        SELECT Salary
        INTO v_salary
        FROM Employees
        WHERE EmployeeID = p_employee_id;

        RETURN v_salary * 12;
    END CalculateAnnualSalary;

END EmployeeManagement;
/

Execution
-- Hire an employee
BEGIN
    EmployeeManagement.HireEmployee(
        101,
        'John',
        'IT',
        50000
    );
END;
/
-- Update employee details
BEGIN
    EmployeeManagement.UpdateEmployeeDetails(
        101,
        'John Smith',
        'HR',
        55000
    );
END;
/
