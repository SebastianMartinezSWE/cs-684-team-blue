# Sprint 3: UX Test Cases

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
