DECLARE
    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID, InterestRate
        FROM Loans;

    v_loan UpdateLoanInterestRates%ROWTYPE;
    v_new_rate NUMBER;

BEGIN
    OPEN UpdateLoanInterestRates;

    LOOP
        FETCH UpdateLoanInterestRates INTO v_loan;

        EXIT WHEN UpdateLoanInterestRates%NOTFOUND;

        -- New policy: reduce interest rate by 0.5%
        v_new_rate := v_loan.InterestRate - 0.5;

        UPDATE Loans
        SET InterestRate = v_new_rate
        WHERE LoanID = v_loan.LoanID;

        DBMS_OUTPUT.PUT_LINE(
            'Loan ID: ' || v_loan.LoanID ||
            ', Updated Interest Rate: ' ||
            v_new_rate || '%'
        );
    END LOOP;

    CLOSE UpdateLoanInterestRates;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Loan interest rates updated successfully.'
    );
END;
/


Execution
SET SERVEROUTPUT ON;

BEGIN
    NULL;
END;
/
