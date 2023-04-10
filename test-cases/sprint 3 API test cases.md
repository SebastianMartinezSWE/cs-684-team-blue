# Sprint 3: API Test Cases

## Test Case ID - TBL001

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

## Test Case ID - TBL002

**Authors:** _Sebastian_

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
