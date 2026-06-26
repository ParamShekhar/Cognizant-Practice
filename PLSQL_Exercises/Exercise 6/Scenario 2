DECLARE
    CURSOR ApplyAnnualFee IS
        SELECT AccountID, Balance
        FROM Accounts;

    v_account ApplyAnnualFee%ROWTYPE;
    v_fee NUMBER := 500;   -- Annual maintenance fee

BEGIN
    OPEN ApplyAnnualFee;

    LOOP
        FETCH ApplyAnnualFee INTO v_account;

        EXIT WHEN ApplyAnnualFee%NOTFOUND;

        UPDATE Accounts
        SET Balance = Balance - v_fee
        WHERE AccountID = v_account.AccountID;

        DBMS_OUTPUT.PUT_LINE(
            'Annual fee deducted from Account ID: '
            || v_account.AccountID
            || ', New Balance: '
            || (v_account.Balance - v_fee)
        );
    END LOOP;

    CLOSE ApplyAnnualFee;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Annual maintenance fee applied successfully.'
    );
END;
/

Execution
SET SERVEROUTPUT ON;

BEGIN
    NULL;
END;
/
