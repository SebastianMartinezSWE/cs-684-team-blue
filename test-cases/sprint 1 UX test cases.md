# Sprint 1: UI/UX Test Cases

---

## Test Case ID: TBL001

**Author:** _Akshay_

**Test Method:** Manual

**Description:**
Test to verify the landing page to display a method (button or link) to navigate to a “Sign-in” page

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- To not be signed-in

**Test Steps:**

1. cd into the frontend folder and run `npm start`
2. An instance of a web browser will launch after running npm start in the frontend folder and the landing page will load

**Pass/Fail Criteria:**

- **Pass:**

  - The presence of sign-in and transition to sign-in page

- **Fail:**

  - Absence of the sign-in button and not navigating to the sign-in page

---

## Test Case ID - TBL002

**Author:** _Akshay_

**Test Method:** Manual

**Description:** To test when signed in, the landing page displays the username and a method to sign out

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- To be signed in into a valid account

**Test Steps:**

1. Username should be displayed on the top right along with the sign out button in the nav bar after signing in
2. Click on the sign out button to sign out of the account and be redirected to landing page

**Pass/Fail Criteria:**

- **Pass:**

  - Username used to sign in and the sign-out button is displayed after signing in
  - Being able to sign out

- **Fail:**

  - The absence of either username or sign out button
  - Being unable to sign out

---

## Test Case ID - TBL003

**Author:** _Akshay_

**Test Method:** Manual

**Description:** Sign-in form implementation

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- To be on the sign-in page

**Test Steps:**

1. Verify the form has
   - A textbox to collect a user name
   - The user name is required
   - A textbox to collect a password
   - The password is required
   - A button to submit the sign-in details.

**Pass/Fail Criteria:**

- **Pass:**

  - The presence of all the above mentioned requirements

- **Fail:**

  - Any of the above mentioned requirements are missing

---

## Test Case ID - TBL004

**Author:** _Akshay_

**Test Method:** Manual

**Description:** Entering proper account credentials and navigating to the home page.

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- Have a valid account already made

**Test Steps:**

1. Enter the username and password
2. Click on the sign in button

**Pass/Fail Criteria:**

- **Pass:**

  - Successful sign-in and transition to the home page

- **Fail:**

  - Failing to sign in after entering valid credentials
  - Absence of sign-in button

---

## Test Case ID - TBL005

**Author:** _Akshay_

**Test Method:** Manual

**Description:** Entering an incorrect combination of a username and password, and displaying an appropriate message

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- To be on sign-in page

**Test Steps:**

1. Enter a incorrect username and password
2. Click on sign-in button
3. Appropriate error message should display at the top

**Pass/Fail Criteria:**

- **Pass:**

  - Displaying an error message after clicking sign-in button

- **Fail:**

  - Failure to display a error message
  - Failure to display the appropriate error message

---

## Test Case ID - TBL006

**Author:** _Akshay_

**Test Method:** Manual

**Description:** Sign-up form implementation

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- To be on the sign-up page

**Test Steps:**

1. Verify the form has
   - A textbox to collect a user name
   - The user name is required
   - A textbox to collect a password
   - The password is required
   - A textbox to collect the confirmed password
   - The confirm password is required
   - A button to submit the sign-up details.

**Pass/Fail Criteria:**

- **Pass:**

  - The presence of all the above mentioned requirements

- **Fail:**

  - Any of the above mentioned requirements are missing

---

## Test Case ID - TBL007

**Description:** Collect username for sign-up page

**Test Steps:** when the user enters a username for the first time, it must fit some requirements. The username must a string that is at least 8 characters long, the username shall not include any spaces, and leading and trailing spaces should be trimmed.

**Pre-requisites:** to be running the api on the system and to be on the sign-up page

**Author:** Rajiv Dave

**Test Method:** Manual

**Pass/Fail Criteria:** the presence of all the above mentioned requirements is a pass criteria, and absence of any one is a fail criteria.

---

## Test Case ID - TBL008

**Description:** Collect password for sign-up page

**Test Steps:** when the user creates a password for the first time, it must fit some requirements. The password should be at least 8 characters long, shall not include any spaces, and leading and trailing spaces should be trimmed. The password must also contain one upper-case latter, one lowercase letter, and one character that is not a letter

**Pre-requisites:** to be running the api on the system and to be on the sign-up page

**Author:** Rajiv Dave

**Test Method:** Manual

**Pass/Fail Criteria:** the presence of all the above mentioned requirements is a pass criteria, and absence of any one is a fail criteria.

---

## Test Case ID - TBL009

**Description:** If both the user-created username and password meet the criteria, create an account and navigate to the Landing Page as signed in

**Test Steps:** Creating a username and password and then pressing the sign up button

**Pre-requisites:** use the newly created username and password

**Author:** Rajiv Dave

**Test Method:** Manual

**Pass/Fail Criteria:** Pass criteria is successfully signing up for an account,fail criteria is failing to create an account even if both the username and password follow the requirements and absence of sign up button

---

## Test Case ID - TBL010

**Description:** If the user created password and username don't meet the requirements, display error message

**Test Steps:** entering username and password that don't meet the requirements and press sign up

**Pre-requisites:** to run the api on system and be on sign-up page

**Author:** Rajiv Dave

**Test Method:** Manual

**Pass/Fail Criteria:** Displaying an error message is a pass, not displaying one is a fail
