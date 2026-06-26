DECLARE
    CURSOR customer_cursor IS
        SELECT c.CustomerID, c.Age, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID;
BEGIN
    FOR rec IN customer_cursor LOOP
        -- Check if customer age is above 60
        IF rec.Age > 60 THEN
            -- Reduce interest rate by 1%
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied to Loan ID: ' ||
                rec.LoanID ||
                ', New Interest Rate: ' ||
                (rec.InterestRate - 1) || '%'
            );
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest rate update completed.');
END;
/
