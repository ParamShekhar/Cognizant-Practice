CREATE OR REPLACE FUNCTION HasSufficientBalance (
    p_account_id IN NUMBER,
    p_amount     IN NUMBER
)
RETURN BOOLEAN
IS
    v_balance NUMBER;
BEGIN
    -- Fetch account balance
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_account_id;

    -- Check if sufficient balance exists
    IF v_balance >= p_amount THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;

EXCEPTION
    -- Account not found
    WHEN NO_DATA_FOUND THEN
        RETURN FALSE;

    -- Any other error
    WHEN OTHERS THEN
        RETURN FALSE;
END;
/

Example Execution
DECLARE
    v_result BOOLEAN;
BEGIN
    v_result := HasSufficientBalance(101, 5000);

    IF v_result THEN
        DBMS_OUTPUT.PUT_LINE(
            'Sufficient balance available.'
        );
    ELSE
        DBMS_OUTPUT.PUT_LINE(
            'Insufficient balance.'
        );
    END IF;
END;
/
