# Sprint 1: UX Test Cases

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

**Author:** _Rajiv Dave_

**Test Method:** Manual

**Description:** Checking the username requirements for the sign-up page

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- To be on the sign-up page

**Test Steps:**

1. Verify that the following username requirements are shown in the sign up page
   - The username must a string that is at least 8 characters long
   - The username shall not include any spaces
   - Leading and trailing spaces should be trimmed.

**Pass/Fail Criteria:**

- **Pass:**

  - The presence of all the above mentioned requirements

- **Fail:**

  - The absence of any of the above mentioned requirements

---

## Test Case ID - TBL008

**Author:** _Rajiv Dave_

**Test Method:** Manual

**Description:** Checking the password requirements for the sign-up page

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- To be on the sign-up page

**Test Steps:**

1. Verify that the following password requirements are shown in the sign up page
   - The password should be at least 8 characters long
   - Shall not include any spaces
   - Leading and trailing spaces should be trimmed
   - Must include one upper-case latter
   - Must include one lowercase letter
   - Must include one character that is not a letter

**Pass/Fail Criteria:**

- **Pass:**

  - The presence of all the above mentioned requirements

- **Fail:**

  - The absence of any of the above mentioned requirements

---

## Test Case ID - TBL009

**Author:** _Rajiv Dave_

**Test Method:** Manual

**Description:** If both the user-created username and password meet the criteria, create an account and navigate to the home page

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- To be on the sign-up page

**Test Steps:**

1. Enter a valid username
2. Enter a valid password
3. Confirm password
4. Click on sign up button

**Pass/Fail Criteria:**

- **Pass:**

  - Successfully signing up for an account and navigating to the home page

- **Fail:**
  - Failing to create an account even if both the username and password follow the requirements
  - Absence of sign up button

---

## Test Case ID - TBL010

**Author:** _Rajiv Dave_

**Test Method:** Manual

**Description:** If the user created password and username don't meet the requirements, display an error message

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- To be on the sign-up page

**Test Steps:**

1. Enter a username that doesn't meet the requirements
2. Click on the sign up button
3. Enter a password that doesn't meet the requirements
4. Click on the sign up button

**Pass/Fail Criteria:**

- **Pass:**

  - Displaying the appropriate error message

- **Fail:**

  - Not displaying the appropriate error message
  - Not displaying a appropriate error message

  # Sprint 2: UX Test Cases

## Test Case ID - TBL020

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing if the Landing page is rendering properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - A refresh button are present
  - The news articles are present
  - A sign in and sign out button are present

- **Fail:**

  - The absence of either the refresh button, sign in button, or sign up button
  - The absence of the news articles

---

## Test Case ID - TBL021

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing with the Home page rendered properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - A refresh button are present
  - A settings button is present
  - The news articles are present
  - A sign in and sign out button are present

- **Fail:**

  - The absence of either the refresh button, sign in button, sign up button or settings button
  - The absence of the news articles

---

## Test Case ID - TBL022

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing if the Settings Modal renders properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - If the Settings options are present when the settings button is clicked
  - If the save button is not present

- **Fail:**

  - The absence of the settings options and or the save button

---

## Test Case ID - TBL023

**Author:** _Sebastian_

**Test Method:** Manuel

**Description:** Testing if the Settings get properly saved

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- Have a valid account with The Big Blue Theory
- To be in the settings modal

**Test Steps:**

1. Choose different types of settings options
2. Click on the `Save` button
3. Re-enter the Settings modal

**Pass/Fail Criteria:**

- **Pass:**

  - If the options chosen after pressing the save button is shown after re-entering the modal

- **Fail:**

  - The absence of the settings options that were chosen

# Sprint 3: UX Test Cases

## Test Case ID - TBL026

**Author:** _Rajiv_

**Test Method:** Manual Integration Test

**Description:** Testing if landing page is set up correctly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Open app and login to view landing page

**Pass/Fail Criteria:**

- **Pass:**

  - The landing page page contains tabs to select the articles displayed
  - There is a Home tab plus tabs for each category

- **Fail:**

  - Tabs are not present for each category
  - Home tab is not present

---

## Test Case ID - TBL027

**Author:** _Rajiv_

**Test Method:** Manual Integration Test

**Description:** Testing to see if the currently selected tab is highlighted

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1.Select and click on a tab

**Pass/Fail Criteria:**

- **Pass:**

  - The currently selected tab is highlighted
  - The home tab is highlighted when first signed in

- **Fail:**

  - The currently selected tab is not highlighted
  - When first signing in, some other tab is selected besides the home tab

---

## Test Case ID - TBL028

**Author:** _Sebastian_

**Test Method:** Manual Integration Test

**Description:** Testing if clicking on tab switches to that tab and displays news articles for that category

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Click on tab

**Pass/Fail Criteria:**

- **Pass:**

  - Tab switches to the one selected and displays articles for that category

- **Fail:**

  - The tab does not switch
  - The absence of the news articles and or wrong articles displayed

---

## Test Case ID - TBL029

**Author:** _Sebastian_

**Test Method:** Manual Integration Test

**Description:** Testing pagination

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Scroll to the bottom and click on pagination number

**Pass/Fail Criteria:**

- **Pass:**

  - If pagination number switched to the one selected
  - If screen scrolls to the top
  - If next set of articles are displayed

- **Fail:**

  - The pagination number does not switch
  - The screen doesn't scroll to the top
  - The absence of the news articles

---

## Test Case ID - TBL030

**Author:** _Sebastian_

**Test Method:** Manual Integration Test

**Description:** Testing if home tab displays articles based on settings

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running
- Be signed in as a valid user

**Test Steps:**

1. Click on `Settings` button
2. Change settings
3. Press `Save`

**Pass/Fail Criteria:**

- **Pass:**

  - If articles are displayed in home tab
  - If articles displayed reflect the settings chosen

- **Fail:**

  - The articles do not display
  - The articles displayed do not reflect the settings chosen

  # Sprint 4: UX Test Cases

## Test Case ID - TBL031

**Author:** _Rajiv_

**Test Method:** Manual System Test

**Description:** Checking if there is a text box to enter search items on the landing page

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Sign in
2. navigate to the landing Pagae
3. Find the search option and check if there is a text box for entering search options

**Pass/Fail Criteria:**

- **Pass:**

  - There is a text box present to enter search options

- **Fail:**

  -There is not a text box present

---

## Test Case ID - TBL032

**Author:** _Rajiv_

**Test Method:** Manual System Test

**Description:** Checking to see if the text box will support AND,OR and NOT and the use of parenthesis

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Sign in
2. navigate to the landing Pagae
3. Find the search box and enter a search item contianing AND and see if the results correspond with those terms.
4. Find the search box and enter a search item contianing OR and see if the results correspond with those terms.
5. Find the search box and enter a search item contianing NOT and see if the results correspond with those terms.
6. Enter a search containing parenthesis and see if the search results the usage of them
   **Pass/Fail Criteria:**

- **Pass:**

  - The search box supports use of AND, OR, and NOT and parenthesis

- **Fail:**

  -The search box does not support use of AND, OR, and NOT and parenthesis

---

## Test Case ID - TBL033

**Author:** _Rajiv_

**Test Method:** Manual System Test

**Description:** Checking to see if search results appear in descending order with the most recent at top

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Sign in
2. navigate to the landing Pagae
3. Find the search box and enter a search item
4. Check if the first search result has the most recent date
5. Then check if every item after it has an eariler date in descending order from newer to older
   **Pass/Fail Criteria:**

- **Pass:**

  - The search results appear in descending order of recent to old

- **Fail:**

  -The search results do not appear in descending order of recent to old

---

## Test Case ID - TBL034

**Author:** _Rajiv_

**Test Method:** Manual System Test

**Description:** checking to see if a messgae is displayed when no search results are there to show

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have backend running
- Have frontend running

**Test Steps:**

1. Sign in
2. navigate to the landing Pagae
3. Find the search box and enter a search items till youu find one that has no relevant results
4. Check if a an appropriate message appears
   **Pass/Fail Criteria:**

- **Pass:**

  - an appropriate message appears if there are no search results

- **Fail:**

  -an appropriate message does not appear if there are no search results
