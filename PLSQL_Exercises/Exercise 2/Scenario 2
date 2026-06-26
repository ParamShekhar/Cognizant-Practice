CREATE OR REPLACE PROCEDURE UpdateSalary (
    p_employee_id IN NUMBER,
    p_percentage  IN NUMBER
)
IS
    v_salary NUMBER;
BEGIN
    -- Fetch current salary
    SELECT Salary
    INTO v_salary
    FROM Employees
    WHERE EmployeeID = p_employee_id;

    -- Update salary
    UPDATE Employees
    SET Salary = Salary + (Salary * p_percentage / 100)
    WHERE EmployeeID = p_employee_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Salary updated successfully for Employee ID: '
        || p_employee_id
    );

EXCEPTION
    -- Handle case when employee ID does not exist
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            'Employee ID ' || p_employee_id || ' does not exist.',
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE(
            'Error: Employee ID '
            || p_employee_id
            || ' not found.'
        );

    -- Handle all other errors
    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            SQLERRM,
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE(
            'Error occurred: ' || SQLERRM
        );
END;
/

Example execution -

BEGIN
    UpdateSalary(101, 10);
END;
/
