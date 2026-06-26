CREATE OR REPLACE FUNCTION CalculateAge (
    p_dob IN DATE
)
RETURN NUMBER
IS
    v_age NUMBER;
BEGIN
    -- Calculate age in years
    v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, p_dob) / 12);

    RETURN v_age;
END;
/

Example Execution
DECLARE
    v_age NUMBER;
BEGIN
    v_age := CalculateAge(TO_DATE('15-08-1995', 'DD-MM-YYYY'));

    DBMS_OUTPUT.PUT_LINE(
        'Customer Age: ' || v_age || ' years'
    );
END;
/
