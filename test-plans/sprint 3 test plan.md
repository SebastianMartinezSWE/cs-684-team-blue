# Sprint 1: Test Plan

## INTRODUCTION

In this sprint, we will be validating if the landing page and home page have been properly created. As well as the sign in and sign out pages, along with sign out functionality being properly implemented. This includes testing that the database is properly receiving, storing and sending out information.

---

### Test items

1. Landing page
2. Sign-up page
3. Database
4. Sign-in page
5. Home page
6. Sign-out

### Features to be tested

1. **Landing page**
   - Sign in and Sign out buttons
2. **Sign-up page**
   - Proper sign up form
   - Username and password requirements
   - Proper error handling
3. **Database**
   - Data is stored and sent properly
4. **Sign-in page**
   - Proper sign in form
   - Username and password requirements
   - Proper error handling
5. **Home page**
   - Displays the username of the user thats currently signed in and sign out button
6. **Sign-out**
   - Proper sign out functionality

### Approach

We will be taking a manual testing approach this sprint to verify the requirements

### Testing Tasks

1. Testing to see if the API request body and response codes are received and sent
2. Testing the UX requirements
3. Testing to see if the data entered is stored in the database

### Responsibilities

- Testing

  - Backend/API/Database

    - _Rajiv Dave_
    - _Mutunoor Akshay Kumar_

  - Frontend

    - Landing Page

      - _Rajiv Dave_
      - _Mutunoor Akshay Kumar_

    - Home Page

    - _Rajiv Dave_
    - _Mutunoor Akshay Kumar_

### Schedule

**02/27/23:**

- Meeting and coming up with test plan and initial test cases

**02/28/23 - 03/04/23:**

- Splitting up work and working on testing individually

**03/04/23:**

- Meeting up again and sharing test results and finalizing details

**03/05/23:**

- Pushing finalized test folders to the main

# Sprint 2: Test Plan

## INTRODUCTION

In this sprint, we will be testing the NewsAPI, We will be testing if the NewsAPI is being properly called, from the backend which in turn is being called from the landing page and home page. As well as, the inclusion of a new Settings page that will allow users to narrow down their preference of news articles that will eventually be reflected on the home page in the sprint 3. Finally, we will also test that the preferences chosen by users will be saved in MongoDB.

---

### Test items

1. Landing page
2. Home page
3. Settings page
4. NewsAPI functionality
5. Database

### Features to be tested

1. **Landing page**

   - Displaying a list of news articles from the NewsAPI General category
   - Displays a refresh button to allow users to refresh the list of articles

2. **Home page**

   - Displays a button linking to the Settings page when a valid user is logged in
   - Displays a refresh button to allow users to refresh the list of articles

3. **Settings page**

   - Allowing users to choose between the following news article types
     - General (on by default)
     - Business
     - Entertainment
     - Health
     - Science
     - Sports
     - Technology

4. **NewsAPI functionality**
   - The new API endpoint in the backend to call the NewsAPI for the frontend
5. **Database**
   - After preferences are chosen, they are saved in MongoDB and are tied to a specific user

### Approach

We will be taking a unit testing approach this sprint to verify the requirements using Vitest and MSW

### Testing Tasks

1. Testing to see if the API request body and response codes are received and sent
2. Testing the UX requirements
3. Testing to see if the data entered is stored in the database

### Responsibilities

- Testing

  - Backend/API/Database

    - _Jayadeep Vadlamudi_
    - _Rajiv Dave_

  - Frontend

    - Landing Page

      - _Mutunoor Akshay Kumar_
      - _Rajiv Dave_

    - Home Page

      - _Mutunoor Akshay Kumar_
      - _Sebastian Martinez_

    - Settings Page
      - _Mutunoor Akshay Kumar_
      - _Jayadeep Vadlamudi_

### Schedule

**03/12/23:**

- Meeting and coming up with test plan and initial test cases

**03/12/23 - 03/23/23:**

- Splitting up work and working on testing individually

**03/25/23:**

- Meeting up again and sharing test results and finalizing details

**03/26/23:**

- Pushing finalized test folders to the main

# Sprint 3: Test Plan

## Introduction

In this sprint, we will be doing integration testing on The Big Blue Theory. This sprint introduces new features such as category tabs for different types of news, a custom "Home" tab to reflect the implementation of the "Settings" Modal from last sprint, and as well as pagination so the user is able to view all of the articles available at the time.

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
   - News endpoint should return articles from user settings, be in descending order and be limited to 250 articles max

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

      - _Sebastian Martinez and Rajiv Dave_

    - Home Page

      - _Sebastian Martinez and Rajiv Dave_

    - Settings Page

      - _Sebastian Martinez and Rajiv Dave_

### Schedule

**03/28/23 - 04/03/23:**

- Complete new Backend API requirements

**04/03/23 - 04/06/23:**

- Complete new Frontend UI/UX requirements

**04/07/23 - 04/09/23:**

- Conduct integration testing

**04/09/23:**

- Merging finalized test folders to the main
