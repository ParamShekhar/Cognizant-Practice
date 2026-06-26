CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_balance NUMBER;
BEGIN
    -- Check deposit amount
    IF :NEW.TransactionType = 'DEPOSIT' THEN
        IF :NEW.Amount <= 0 THEN
            RAISE_APPLICATION_ERROR(
                -20001,
                'Deposit amount must be positive.'
            );
        END IF;
    END IF;

    -- Check withdrawal amount
    IF :NEW.TransactionType = 'WITHDRAWAL' THEN
        SELECT Balance
        INTO v_balance
        FROM Accounts
        WHERE AccountID = :NEW.AccountID;

        IF :NEW.Amount > v_balance THEN
            RAISE_APPLICATION_ERROR(
                -20002,
                'Insufficient balance for withdrawal.'
            );
        END IF;
    END IF;
END;
/

Execution (Example)

Valid Deposit

INSERT INTO Transactions
VALUES (1001, 101, 'DEPOSIT', 5000, SYSDATE);

Valid Withdrawal

INSERT INTO Transactions
VALUES (1002, 101, 'WITHDRAWAL', 2000, SYSDATE);

Invalid Withdrawal

INSERT INTO Transactions
VALUES (1003, 101, 'WITHDRAWAL', 50000, SYSDATE);

Output:

ORA-20002: Insufficient balance for withdrawal.

Invalid Deposit

INSERT INTO Transactions
VALUES (1004, 101, 'DEPOSIT', -1000, SYSDATE);

Output:

ORA-20001: Deposit amount must be positive.
