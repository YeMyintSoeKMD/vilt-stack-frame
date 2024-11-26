# 19 NOV 24

1. To implement admin dashboard (navbar section, mobile version)

2. User CRUD

3. To implement all features such as

    - common CRUD from & table
    - pagination
    - sweetalert (sweetalert, sweetalert toast, confirm dialog)

4. Fetch verdor API from Laravel and send back to frontend with own custom api routes

5. Customer authentication
   ** Required Fields **

    - name (nullable)
    - email (nullable)
    - phone (nullable)
    - otp (nullable)
    - password (nullable)
    - role [admin, customer]

    ** Customer Authentication Logic **:

    - When opt is successfully sent to customer phone number, store "phone_no" and "opt" to database
    - Now customer can login using recently sent "otp" and "phone_no"
