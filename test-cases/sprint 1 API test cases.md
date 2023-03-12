# Sprint 1: API Test Cases

---

## Test Case ID - TBL011

**Authors:** _Rajiv Dave_, _Akshay_

**Test Method:** Manual

**Description:** SignIn API Endpoint, Proper authorization of user should include the username and password in the request body along with the correct response code from the API

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/users/signin` in the URL search bar
2. Click on `Body` under the URL search bar
3. Click on the `raw` radio button
4. Click the dropdown menu next to the `GraphQL` radio button
5. Click on JSON
6. In the text box enter the username and password of a valid user in proper JSON format

   ```
   {
       "username":"",
       "password":""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response code 200 is received (which means the user is authorized)
  - If the request body includes the username and password of the user that signed in

- **Fail:**
  - If the response code is not 200
  - If the request body does not include the username and password of the user that was created

---

## Test Case ID - TBL012

**Authors:** _Rajiv Dave_, _Akshay_

**Test Method:** Manual

**Description:** SignIn API Endpoint, Proper error message should be included in the request body if credentials entered were not valid along with the correct response code from the API

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/users/signin` in the URL search bar
2. Click on `Body` under the URL search bar
3. Click on the `raw` radio button
4. Click the dropdown menu next to the `GraphQL` radio button
5. Click on JSON
6. In the text box enter an invalid username and password in proper JSON format

   ```
   {
       "username":"",
       "password":""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response code 401 is received (which means the user is not authorized)
  - If the request body includes the proper error message

- **Fail:**
  - If the response code is not 401
  - If the request body does not include the proper error message

---

## Test Case ID - TBL013

**Authors:** _Rajiv Dave_, _Akshay_

**Test Method:** Manual

**Description:** SignUp API Endpoint, Proper creation of user should include the username and password in the request body along with the correct response code from the API

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/users/signup` in the URL search bar
2. Click on `Body` under the URL search bar
3. Click on the `raw` radio button
4. Click the dropdown menu next to the `GraphQL` radio button
5. Click on JSON
6. In the text box enter a valid username and password in proper JSON format

   ```
   {
       "username":"",
       "password":"",
       "confirmPassword": ""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response code 200 is received (which means the user is authorized)
  - If the request body includes the username and password of the user that was created

- **Fail:**
  - If the response code is not 200
  - If the request body does not include the username and password of the user that was created

---

## Test Case ID - TBL014

**Authors:** _Rajiv Dave_, _Akshay_

**Test Method:** Manual

**Description:** SignUp API Endpoint, Proper error message should be included in the request body if username entered is already in the database along with the correct response code from the API

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/users/signup` in the URL search bar
2. Click on `Body` under the URL search bar
3. Click on the `raw` radio button
4. Click the dropdown menu next to the `GraphQL` radio button
5. Click on JSON
6. In the text box enter an already taken username and a valid password in proper JSON format

   ```
   {
       "username":"",
       "password":"",
       "confirmPassword": ""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response code 401 is received (which means access denied due to duplicated username)
  - Proper error message is included in the request body

- **Fail:**
  - If the response code is not 401
  - Proper error message is not included in the request body

---

## Test Case ID - TB015

**Authors:** _Rajiv Dave_, _Akshay_

**Test Method:** Manual

**Description:** SignOut API Endpoint, Successful sign out of user should include the username in the request body along with the correct response code from the API

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/users/signout` in the URL search bar
2. Click on `Body` under the URL search bar
3. Click on the `raw` radio button
4. Click the dropdown menu next to the `GraphQL` radio button
5. Click on JSON
6. In the text box enter a valid username in proper JSON format

   ```
   {
       "username":""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - If the response code 200 is received (which means successful sign out)
  - If the request body includes the username of the user who just signed out

- **Fail:**
  - If the response code is not 200
  - If the request body does not include the username of the user who just signed out
