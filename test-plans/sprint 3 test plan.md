# Sprint 3: Test Plan

## Introduction

In this sprint, I will doing integration testing on The Big Blue Theory. This sprint introduces new features such as category tabs for different types of news, a custom "Home" tab to reflect the implementation of the "Settings" Modal from last sprint, and as well as pagination so the user is able to view all of the articles available at the time.

---

### Test items

1. Landing page
2. Home page
3. Settings page
4. API Endpoint

### Features to be tested

1. **Landing page**

   - Clicking through all category tabs should display news articles
   - Clicking on the pagination number should display next set of articles of the same category

2. **Home page**

   - Clicking through all category tabs should display news articles
   - Changing the settings should be reflected in the "Home" tab
   - Clicking on the pagination number should display next set of articles of the same category

3. **API Endpoint**

   - Category endpoint should return a status code of 200

### Approach

We will be taking a manual integration testing approach this sprint to verify the requirements

### Testing Tasks

1. Testing to see if the API request body and response codes are received and sent
2. Testing the UX requirements
3. Testing to see if the data entered is stored in the database

### Responsibilities

- Testing

  - Backend/API/Database

    - _Sebastian Martinez_

  - Frontend

    - Landing Page

      - _Sebastian Martinez_

    - Home Page

      - _Sebastian Martinez_

    - Settings Page

      - _Sebastian Martinez_

### Schedule

**03/28/23 - 04/03/23:**

- Complete new Backend API requirements

**04/03/23 - 04/06/23:**

- Complete new Frontend UI/UX requirements

**04/07/23 - 04/09/23:**

- Conduct integration testing

**04/09/23:**

- Merging finalized test folders to the main
