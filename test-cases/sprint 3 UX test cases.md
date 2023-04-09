# Sprint 3: UX Test Cases

## Test Case ID - TBL001

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

## Test Case ID - TBL002

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

## Test Case ID - TBL003

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

## Test Case ID - TBL004

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

## Test Case ID - TBL005

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
