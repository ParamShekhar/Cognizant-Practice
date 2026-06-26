-- Package Specification
CREATE OR REPLACE PACKAGE CustomerManagement AS

    PROCEDURE AddNewCustomer(
        p_customer_id   IN NUMBER,
        p_customer_name IN VARCHAR2,
        p_address       IN VARCHAR2,
        p_phone         IN VARCHAR2
    );

    PROCEDURE UpdateCustomerDetails(
        p_customer_id   IN NUMBER,
        p_customer_name IN VARCHAR2,
        p_address       IN VARCHAR2,
        p_phone         IN VARCHAR2
    );

    FUNCTION GetCustomerBalance(
        p_customer_id IN NUMBER
    ) RETURN NUMBER;

END CustomerManagement;
/

-- Package Body
CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    -- Procedure to add a new customer
    PROCEDURE AddNewCustomer(
        p_customer_id   IN NUMBER,
        p_customer_name IN VARCHAR2,
        p_address       IN VARCHAR2,
        p_phone         IN VARCHAR2
    )
    IS
    BEGIN
        INSERT INTO Customers(
            CustomerID,
            CustomerName,
            Address,
            PhoneNumber
        )
        VALUES(
            p_customer_id,
            p_customer_name,
            p_address,
            p_phone
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Customer added successfully.'
        );
    END AddNewCustomer;


    -- Procedure to update customer details
    PROCEDURE UpdateCustomerDetails(
        p_customer_id   IN NUMBER,
        p_customer_name IN VARCHAR2,
        p_address       IN VARCHAR2,
        p_phone         IN VARCHAR2
    )
    IS
    BEGIN
        UPDATE Customers
        SET CustomerName = p_customer_name,
            Address      = p_address,
            PhoneNumber  = p_phone
        WHERE CustomerID = p_customer_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Customer details updated successfully.'
        );
    END UpdateCustomerDetails;


    -- Function to get customer balance
    FUNCTION GetCustomerBalance(
        p_customer_id IN NUMBER
    )
    RETURN NUMBER
    IS
        v_balance NUMBER;
    BEGIN
        SELECT SUM(Balance)
        INTO v_balance
        FROM Accounts
        WHERE CustomerID = p_customer_id;

        RETURN NVL(v_balance, 0);
    END GetCustomerBalance;

END CustomerManagement;
/

Execution
-- Add a customer
BEGIN
    CustomerManagement.AddNewCustomer(
        101,
        'Rahul Sharma',
        'Delhi',
        '9876543210'
    );
END;
/
