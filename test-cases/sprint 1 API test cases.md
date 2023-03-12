Test Case Id- TBL011

Description: Signin Api Endpoint, request body with username and password for a user that is authorized and receive correct response code from the API

Test Steps: Enter username and password for authorized user

Pre-requisites: having the repository cloned and running the api on local system and to be not signed-in

Author: Rajiv Dave , Akshay

Test Method: manual

Pass/Fail Criteria: Pass if the response code 200 is received (which means the user is authorized), fail if it isn't received

Test Case Id- TBL012

Description: Signin Api Endpoint, request body with username and password for a user that is not authorized and receive correct response code from the API

Test Steps: Enter username and password that for a user that is not authorized

Pre-requisites: having the repository cloned and running the api on local system and to be not signed-in

Author: Rajiv Dave , Akshay

Test Method: manual

Pass/Fail Criteria: Pass if the response code 401 is received,(which means the user is not authorized, fail if it isn't received

Test Case Id- TBL013

Description: SignUp API Endpoint, request body with username and password that meets criteria and and receive correct response code from the API

Test Steps: Enter username and password that meet requirements

Pre-requisites: having the repository cloned and running the api on local system and to not be signed-up

Author: Rajiv Dave , Akshay

Test Method: manual

Pass/Fail Criteria: Pass if the response code received is 200, which means the user is signed up and authorized, fail if it isn't received

Test Case Id- TBL014

Description: SignUp API Endpoint request body with username that already exists and receive correct response code from the API

Test Steps: Enter a username that is already taken

Pre-requisites: having the repository cloned and running the api on local system and to not be signed-up

Author: Rajiv Dave , Akshay

Test Method: manual

Pass/Fail Criteria: Pass if the code 401 is received, which means access denied due to duplicated username. Fail if it doesn't

Test Case Id- TB015

Description: Signout API Endpoint, signout for the response body of a username and receive the correct response code

Test Steps: Press sign out button

Pre-requisites: having the repository cloned and running the api on local system and be logged in and be landing page

Author: Rajiv Dave , Akshay

Test Method: manual

Pass/Fail Criteria: Pass if the code 200 is received, which means success. Fail if that code is not received
