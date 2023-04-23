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

   ```json
   {
     "username": "",
     "password": ""
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

   ```json
   {
     "username": "",
     "password": ""
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

   ```json
   {
     "username": "",
     "password": "",
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

   ```json
   {
     "username": "",
     "password": "",
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

   ```json
   {
     "username": ""
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - If the response code 200 is received (which means successful sign out)
  - If the request body includes the username of the user who just signed out

- **Fail:**
  - If the response code is not 200
  - If the request body does not include the username of the user who just signed out

# Sprint 2: API Test Cases

---

## Test Case ID - TBL017

**Authors:** _Sebastian_

**Test Method:** Manual

**Description:** NewsAPI API Endpoint, testing if endpoint calls the NewsAPI endpoint properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/news/default` in the URL search bar

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response is 200 and the news articles are displayed

- **Fail:**
  - If the response code is not 200
  - If the articles are not shown

---

## Test Case ID - TBL018

**Authors:** _Sebastian_

**Test Method:** Manual

**Description:** Settings API Endpoint, testing if endpoint displays updated settings

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman

**Test Steps:**

1. In Postman enter the signin endpoint `localhost:8080/api/settings/userId` in the URL search bar
2. Enter a valid userId after `/settings/`
3. Click on `Body` under the URL search bar
4. Click on the `raw` radio button
5. Click the dropdown menu next to the `GraphQL` radio button
6. Click on JSON
7. In the text box enter the updated settings of a valid user in proper JSON format

   ```json
   {
     "general": true,
     "business": true,
     "entertainment": false,
     "health": true,
     "science": false,
     "sports": false,
     "technology": false
   }
   ```

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response is 200 and the updated settings are displayed

- **Fail:**
  - If the response code is not 200
  - If the updated settings are not shown

# Sprint 3: API Test Cases

## Test Case ID - TBL024

**Authors:** _Sebastian_

**Test Method:** Manual

**Description:** Improved news API Endpoint, testing if endpoint returns articles based on user settings

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- Be signed in as a valid user
- To be on Postman or Thunder Client in VSCode

**Test Steps:**

1. In Postman or Thunder Client enter the news endpoint `localhost:8080/api/news/waldotheoctopus` in the URL search bar

**Pass/Fail Criteria:**

- **Pass:**

  - If the response is 200
  - The articles are based on the users settings
  - The articles are in descending order
  - The limit is 250 articles

- **Fail:**
  - If the response code is not 200
  - If the articles do not meet the criteria

---

## Test Case ID - TBL025

**Authors:** _Sebestain_

**Test Method:** Manual

**Description:** Category API Endpoint, testing if endpoint displays category based articles

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman or Thunder Client in VSCode

**Test Steps:**

1. In Postman or Thunder Client in VSCode enter the category endpoint `localhost:8080/api/category/<A valid News API Category>` in the URL search bar
2. Enter the same URL for all 7 News API categories

   - business
   - entertainment
   - general
   - health
   - science
   - sports
   - technology

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response is 200 and the articles for that category are displayed

- **Fail:**
  - If the response code is not 200
  - If the wrong articles are shown

# Sprint 4: API Test Cases

## Test Case ID - TBL035

**Authors:** _Rajiv_

**Test Method:** Manual

**Description:** Add a new search endpoint, Returns the articles in descending order starting with the
most recent

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the backend running
- To be on Postman or Thunder Client in VSCode

**Test Steps:**

1. In Postman or Thunder Client in VSCode enter the category endpoint `localhost:8080/api//search/{ a valid search term}` in the URL search bar

**Pass/Fail Criteria:**

- **Pass:**

  - Pass if the response is 200 and if the articles are returned in descending order starting with the most recent.

- **Fail:**
  - If the response code is not 200
  - the articles are not returned inescending order starting with the most recent.
