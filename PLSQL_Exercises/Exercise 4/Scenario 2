CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_loan_amount   IN NUMBER,
    p_interest_rate IN NUMBER,
    p_years         IN NUMBER
)
RETURN NUMBER
IS
    v_monthly_rate NUMBER;
    v_months       NUMBER;
    v_emi          NUMBER;
BEGIN
    -- Convert annual interest rate to monthly rate
    v_monthly_rate := p_interest_rate / (12 * 100);

    -- Calculate total number of installments
    v_months := p_years * 12;

    -- Calculate EMI
    v_emi :=
        (p_loan_amount * v_monthly_rate *
        POWER(1 + v_monthly_rate, v_months))
        /
        (POWER(1 + v_monthly_rate, v_months) - 1);

    RETURN ROUND(v_emi, 2);
END;
/

Example Execution
DECLARE
    v_installment NUMBER;
BEGIN
    v_installment :=
        CalculateMonthlyInstallment(
            500000,   -- Loan Amount
            10,       -- Interest Rate (%)
            5         -- Duration in Years
        );

    DBMS_OUTPUT.PUT_LINE(
        'Monthly Installment: ' || v_installment
    );
END;
/
