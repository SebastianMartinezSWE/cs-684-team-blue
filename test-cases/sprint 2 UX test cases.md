# Sprint 2: UX Test Cases

## Test Case ID - TBL001

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing if the Landing page is rendering properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - A refresh button are present
  - The news articles are present
  - A sign in and sign out button are present

- **Fail:**

  - The absence of either the refresh button, sign in button, or sign up button
  - The absence of the news articles

---

## Test Case ID - TBL002

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing with the Home page rendered properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - A refresh button are present
  - A settings button is present
  - The news articles are present
  - A sign in and sign out button are present

- **Fail:**

  - The absence of either the refresh button, sign in button, sign up button or settings button
  - The absence of the news articles

---

## Test Case ID - TBL003

**Author:** _Sebastian_

**Test Method:** Unit

**Description:** Testing if the Settings Modal renders properly

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies

**Test Steps:**

1. run `npm test` in the the frontend

**Pass/Fail Criteria:**

- **Pass:**

  - If the Settings options are present when the settings button is clicked
  - If the save button is not present

- **Fail:**

  - The absence of the settings options and or the save button

---

## Test Case ID - TBL004

**Author:** _Sebastian_

**Test Method:** Manuel

**Description:** Testing if the Settings get properly saved

**Pre-requisites:**

- Have the repository cloned
- Properly installed the project dependencies
- Have the frontend running
- Have a valid account with The Big Blue Theory
- To be in the settings modal

**Test Steps:**

1. Choose different types of settings options
2. Click on the `Save` button
3. Re-enter the Settings modal

**Pass/Fail Criteria:**

- **Pass:**

  - If the options chosen after pressing the save button is shown after re-entering the modal

- **Fail:**

  - The absence of the settings options that were chosen
