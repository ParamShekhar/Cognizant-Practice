CREATE OR REPLACE PROCEDURE AddNewCustomer (
    p_customer_id   IN NUMBER,
    p_customer_name IN VARCHAR2,
    p_address       IN VARCHAR2,
    p_phone         IN VARCHAR2
)
IS
BEGIN
    -- Insert the new customer
    INSERT INTO Customers (
        CustomerID,
        CustomerName,
        Address,
        PhoneNumber
    )
    VALUES (
        p_customer_id,
        p_customer_name,
        p_address,
        p_phone
    );

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Customer added successfully. Customer ID: '
        || p_customer_id
    );

EXCEPTION
    -- Handle duplicate Customer ID
    WHEN DUP_VAL_ON_INDEX THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            'Customer ID ' || p_customer_id ||
            ' already exists.',
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE(
            'Error: Customer ID '
            || p_customer_id ||
            ' already exists.'
        );

    -- Handle any other errors
    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO Error_Log
        VALUES (
            Error_Log_Seq.NEXTVAL,
            SQLERRM,
            SYSDATE
        );

        DBMS_OUTPUT.PUT_LINE(
            'Error occurred: ' || SQLERRM
        );
END;
/


Example Output-

BEGIN
    AddNewCustomer(
        101,
        'Rahul Sharma',
        'Delhi',
        '9876543210'
    );
END;
/
