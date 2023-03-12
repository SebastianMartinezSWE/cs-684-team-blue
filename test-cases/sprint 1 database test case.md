# Sprint 1: Database Test Case

---

## Test Case Id- TBL016

**Author:** _Rajiv Dave_

**Test Method:** Manual

**Description:** Make sure data that is entered into the sign up page is stored in the database

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Have the frontend running
- Have an instance of MongoDB Atlas open in a web browser and be signed in
- Be on the sign up page

**Test Steps:**

1. Enter a valid username
2. Enter a valid password
3. Confirm password
4. Click on the sign up button
5. Go to MongoDB Atlas
6. Click on Browse Collections
7. Verify if the credentials were saved

**Pass/Fail Criteria:**

- **Pass:**

  - If username and password is properly stored in the database

- **Fail:**
  - If username and password is not properly stored in the database
