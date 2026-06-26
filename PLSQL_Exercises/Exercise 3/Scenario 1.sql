CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
    CURSOR savings_cursor IS
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings';
BEGIN
    -- Process each savings account
    FOR rec IN savings_cursor LOOP
        UPDATE Accounts
        SET Balance = Balance + (Balance * 0.01)
        WHERE AccountID = rec.AccountID;

        DBMS_OUTPUT.PUT_LINE(
            'Interest applied to Account ID: '
            || rec.AccountID ||
            ', New Balance: '
            || (rec.Balance * 1.01)
        );
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest processing completed.'
    );

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error occurred: ' || SQLERRM
        );
END;
/


Example Execution - 

BEGIN
    ProcessMonthlyInterest;
END;
/
