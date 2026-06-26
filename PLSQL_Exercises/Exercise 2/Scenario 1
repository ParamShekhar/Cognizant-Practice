CREATE OR REPLACE PROCEDURE SafeTransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    -- Get the balance of the sender's account
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    -- Check if sufficient funds are available
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(
            -20001,
            'Insufficient funds in account ' || p_from_account
        );
    END IF;

    -- Deduct amount from sender's account
    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    -- Add amount to receiver's account
    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;

    -- Commit transaction
    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Transfer of ' || p_amount ||
        ' completed successfully.'
    );

EXCEPTION
    -- Handle account not found
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            'Account not found.',
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE('Error: Account not found.');

    -- Handle all other exceptions
    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            SQLERRM,
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE(
            'Transaction failed: ' || SQLERRM
        );
END;
/



example execution -

BEGIN
    SafeTransferFunds(101, 102, 5000);
END;
/
