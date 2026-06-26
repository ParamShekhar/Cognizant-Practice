DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR rec IN customer_cursor LOOP
        -- Check if balance is greater than $10,000
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ID ' || rec.CustomerID ||
                ' promoted to VIP status.'
            );
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status update completed.');
END;
/
