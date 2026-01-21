# Playwright Login Automation

This project automates a simple login website using **Playwright** with **JavaScript**.  
The automation covers basic actions such as:

- Entering login credentials
- Clicking the login button
- Verifying successful login

---

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

---

## Setup

1. Clone the repository:
git clone <your-repo-url>
cd <your-repo-folder>
-----------------------------------
## Install dependencies:

npm install

## Install Playwright browsers:

npx playwright install

----------------------------------------------------------
Running the Tests
## To execute all Playwright tests:
npx playwright test

To run a specific test file:

npx playwright test <test-file-name>.spec.js

-------------------------------------------------------

Project Structure

├── tests

│   └── login.spec.js      # Login automation test

├── pages
│   └── LoginPage.js       # Page object model for login page

├── package.json

└── README.md
