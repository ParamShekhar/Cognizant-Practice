CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account      IN NUMBER,
    p_destination_account IN NUMBER,
    p_amount              IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    -- Get the balance of the source account
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_source_account;

    -- Check if sufficient balance exists
    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE(
            'Transfer failed: Insufficient balance.'
        );
    ELSE
        -- Deduct amount from source account
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_source_account;

        -- Add amount to destination account
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_destination_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer successful. Amount transferred: '
            || p_amount
        );
    END IF;

EXCEPTION
    -- Handle invalid account number
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error: Account not found.'
        );

    -- Handle all other exceptions
    WHEN OTHERS THEN
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error occurred: ' || SQLERRM
        );
END;
/


Example Execution
BEGIN
    TransferFunds(101, 102, 5000);
END;
/
