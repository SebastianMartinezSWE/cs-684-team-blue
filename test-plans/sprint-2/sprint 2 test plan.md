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

We will be taking a unit testing approach this sprint to verify the requirements using Jest

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
