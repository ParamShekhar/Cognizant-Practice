-- Package Specification
CREATE OR REPLACE PACKAGE AccountOperations AS

    PROCEDURE OpenAccount(
        p_account_id   IN NUMBER,
        p_customer_id  IN NUMBER,
        p_account_type IN VARCHAR2,
        p_balance      IN NUMBER
    );

    PROCEDURE CloseAccount(
        p_account_id IN NUMBER
    );

    FUNCTION GetTotalBalance(
        p_customer_id IN NUMBER
    ) RETURN NUMBER;

END AccountOperations;
/

-- Package Body
CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    -- Procedure to open a new account
    PROCEDURE OpenAccount(
        p_account_id   IN NUMBER,
        p_customer_id  IN NUMBER,
        p_account_type IN VARCHAR2,
        p_balance      IN NUMBER
    )
    IS
    BEGIN
        INSERT INTO Accounts(
            AccountID,
            CustomerID,
            AccountType,
            Balance
        )
        VALUES(
            p_account_id,
            p_customer_id,
            p_account_type,
            p_balance
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Account opened successfully.'
        );
    END OpenAccount;


    -- Procedure to close an account
    PROCEDURE CloseAccount(
        p_account_id IN NUMBER
    )
    IS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID = p_account_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Account closed successfully.'
        );
    END CloseAccount;


    -- Function to get total balance of a customer
    FUNCTION GetTotalBalance(
        p_customer_id IN NUMBER
    )
    RETURN NUMBER
    IS
        v_total_balance NUMBER;
    BEGIN
        SELECT SUM(Balance)
        INTO v_total_balance
        FROM Accounts
        WHERE CustomerID = p_customer_id;

        RETURN NVL(v_total_balance, 0);
    END GetTotalBalance;

END AccountOperations;
/

-- Package Body
CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    -- Procedure to open a new account
    PROCEDURE OpenAccount(
        p_account_id   IN NUMBER,
        p_customer_id  IN NUMBER,
        p_account_type IN VARCHAR2,
        p_balance      IN NUMBER
    )
    IS
    BEGIN
        INSERT INTO Accounts(
            AccountID,
            CustomerID,
            AccountType,
            Balance
        )
        VALUES(
            p_account_id,
            p_customer_id,
            p_account_type,
            p_balance
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Account opened successfully.'
        );
    END OpenAccount;


    -- Procedure to close an account
    PROCEDURE CloseAccount(
        p_account_id IN NUMBER
    )
    IS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID = p_account_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Account closed successfully.'
        );
    END CloseAccount;


    -- Function to get total balance of a customer
    FUNCTION GetTotalBalance(
        p_customer_id IN NUMBER
    )
    RETURN NUMBER
    IS
        v_total_balance NUMBER;
    BEGIN
        SELECT SUM(Balance)
        INTO v_total_balance
        FROM Accounts
        WHERE CustomerID = p_customer_id;

        RETURN NVL(v_total_balance, 0);
    END GetTotalBalance;

END AccountOperations;
/
