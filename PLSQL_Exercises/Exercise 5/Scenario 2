CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog (
        TransactionID,
        AccountID,
        Amount,
        TransactionDate,
        AuditDate
    )
    VALUES (
        :NEW.TransactionID,
        :NEW.AccountID,
        :NEW.Amount,
        :NEW.TransactionDate,
        SYSDATE
    );
END;
/

Execution (Example)
INSERT INTO Transactions (
    TransactionID,
    AccountID,
    Amount,
    TransactionDate
)
VALUES (
    1001,
    101,
    5000,
    SYSDATE
);
