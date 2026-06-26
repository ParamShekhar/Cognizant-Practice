CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department      IN VARCHAR2,
    p_bonus_percent   IN NUMBER
)
IS
    CURSOR emp_cursor IS
        SELECT EmployeeID, EmployeeName, Salary
        FROM Employees
        WHERE Department = p_department;
BEGIN
    -- Update salary of each employee in the department
    FOR rec IN emp_cursor LOOP
        UPDATE Employees
        SET Salary = Salary + (Salary * p_bonus_percent / 100)
        WHERE EmployeeID = rec.EmployeeID;

        DBMS_OUTPUT.PUT_LINE(
            'Bonus applied to Employee ID: ' ||
            rec.EmployeeID ||
            ', New Salary: ' ||
            (rec.Salary + (rec.Salary * p_bonus_percent / 100))
        );
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Bonus update completed for department: ' ||
        p_department
    );

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error occurred: ' || SQLERRM
        );
END;
/


Example Execution
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/
