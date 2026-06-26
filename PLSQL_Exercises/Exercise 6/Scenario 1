DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT c.CustomerID,
               c.CustomerName,
               t.TransactionID,
               t.TransactionType,
               t.Amount,
               t.TransactionDate
        FROM Customers c
        JOIN Accounts a
            ON c.CustomerID = a.CustomerID
        JOIN Transactions t
            ON a.AccountID = t.AccountID
        WHERE EXTRACT(MONTH FROM t.TransactionDate) =
              EXTRACT(MONTH FROM SYSDATE)
          AND EXTRACT(YEAR FROM t.TransactionDate) =
              EXTRACT(YEAR FROM SYSDATE)
        ORDER BY c.CustomerID, t.TransactionDate;

    v_record GenerateMonthlyStatements%ROWTYPE;

BEGIN
    OPEN GenerateMonthlyStatements;

    LOOP
        FETCH GenerateMonthlyStatements INTO v_record;

        EXIT WHEN GenerateMonthlyStatements%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(
            'Customer ID: ' || v_record.CustomerID ||
            ', Name: ' || v_record.CustomerName ||
            ', Transaction ID: ' || v_record.TransactionID ||
            ', Type: ' || v_record.TransactionType ||
            ', Amount: ' || v_record.Amount ||
            ', Date: ' ||
            TO_CHAR(v_record.TransactionDate,'DD-MON-YYYY')
        );
    END LOOP;

    CLOSE GenerateMonthlyStatements;
END;
/


Execution
SET SERVEROUTPUT ON;

BEGIN
    NULL;
END;
/
