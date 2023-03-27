# Sprint 1: API Test Cases

---

## Test Case ID - TBL001

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

## Test Case ID - TBL002

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
