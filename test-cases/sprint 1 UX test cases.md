Test Case Id- TBL001

Description: test to verify the landing page to display a method (button or link) to navigate to a “Sign-in” page

Test Steps: after running the api on local system the landing page is loaded 

Pre-requistes: having the repository cloned and running the api on local system and to be not signed-in

Author: Akshay

Test Method: manual

Pass/Fail Criteria: the presence of sign-in and transitoin to sign-in page is the pass criteria. absence of the sign-in button  and not navigating to the sign-in page are the fail criteria.



Test Case Id- TBL002

Description: to test when signed in the landing page shall display the user’s name and the landing page shall display a method to sign out

Test Steps:to verify the username on the landing page and the sign-out button

Pre-requistes: to be running the api on local system and to be logged in

Author

Test Method: manual

Pass/Fail Criteria: presence of username used to signin and the sign-out button and clicking it to sign out are the pass criteria. The absence of anyof two and unable to sign out are fail criterias.


Test Case Id- TBL003

Description: sign-in form implementation

Test Steps: after going to sign-in page to verify the form has a textbox to collect a user name, the user name is required .The form a textbox to collect a password and the 
password is required and a button to submit the sign-in details.

Pre-requistes: to be running the api on the system and to be on the sign-in page

Author

Test Method: manual 

Pass/Fail Criteria: the presence of all the above mentioned requirements is a pass criteria, and absence of any one is a fail criteria.


Test Case Id- TBL004

Description: if correct combination of user id and password have been submitted, navigate to the Landing Page as signed in

Test Steps: entering the username and password and clicking sign-in button 

Pre-requistes: to use the username and password of an already signed-in account

Author

Test Method: manual

Pass/Fail Criteria: failure to sign-in even after entering an already existing account and the absence of sign-in button are the failure criteria. successfull sign-in and transition to the landing page as signed-in is a pass criteria


Test Case Id- TBL005

Description: by entering an incorrect combination of user id and password have been submitted, display an appropriate message

Test Steps: entering a pair of incorrect username and password and clicking sign-in button 

Pre-requistes: to run the api on system and be on sign-in page

Author

Test Method: manual

Pass/Fail Criteria: displaying an error message after clicking sign-in button is a pass criteria, failure to display an error message is a fail criteria.


Test Case Id- TBL006

Description: sign-up form implementation

Test Steps: after going to sign-up page to verify the form has a textbox to collect a user name ,the user name is required .The form a textbox to collect a password and the 
password is required and a button to submit the sign-up details.

Pre-requistes: to be running the api on the system and to be on the sign-up page

Author

Test Method: manual 

Pass/Fail Criteria: the presence of all the above mentioned requirements is a pass criteria, and absence of any one is a fail criteria.

Test Case Id-TB007

Description: Collect username for sign-up page

Test Steps: when the user enters a username for the first time, it must fit some requirements. The username must a string that is 8 characters long, the username shall not include any spaces, and leading and trailing spaces should be trimmed.

Pre-requistes: to be running the api on the system and to be on the sign-up page

Author: Rajiv Dave

Test Method: Manual

Pass/Fail Criteria: the presence of all the above mentioned requirements is a pass criteria, and absence of any one is a fail criteria.

Test Case Id-TB008

Despciption: Collect password for sign-up page