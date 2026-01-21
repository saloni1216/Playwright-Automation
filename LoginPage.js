const { expect } = require("@playwright/test");
const fs = require("fs");
const { setTimeout } = require("timers/promises");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://saloni1216.github.io/Playwright-Automation/");
    console.log("✅ Login Page successfully navigate");
    await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveTitle("Login & Job Application");
    console.log("✅ Login Page title verify sucessfully");
    await this.page.waitForTimeout(1000);
    const heading = this.page.getByRole("heading", { name: "Login" });
    await expect(heading).toHaveText("Login");
    console.log("✅ Login Page successfully Open");
    await this.page.waitForTimeout(1000);
  }

  async login(username, password) {
    const usernameLoc = this.page.locator("#username");
    await usernameLoc.fill(username);
    console.log("✅ Username sucessfully fill");
    await this.page.waitForTimeout(3000);
    // await page.locator('#username').fill(username);

    const passwordLoc = this.page.locator("#password");
    await passwordLoc.fill(password);
    console.log("✅ Password sucessfully fill");
    await this.page.waitForTimeout(3000);
    // await page.locator('#password').fill(password);

    const loginLoc = this.page.getByRole("button", { name: "Login" });
    await loginLoc.click();
    console.log("✅ Login page sucessfully login");
    await this.page.waitForTimeout(3000);
  }

  async fillJobApllication(fullname, email, phone, qualification, experience) {
    const jobHeadingLoc = this.page.getByRole("heading", {
      name: "Job Application",
    });
    await expect(jobHeadingLoc).toHaveText("Job Application");
    console.log("✅ Heading match sucessfully");

    const fullnameLoc = this.page.locator("#name");
    const emailLoc = this.page.locator("#email");
    const phoneLoc = this.page.locator("#mobile");
    const qualificationLoc = this.page.locator("#qualification");
    const experienceLoc = this.page.locator("#experience");

    await fullnameLoc.fill(fullname);
    console.log("✅ Full name fill sucessfully");
    await this.page.waitForTimeout(2000);

    await emailLoc.fill(email);
    console.log("✅ Email fill sucessfully");
    await this.page.waitForTimeout(2000);

    await phoneLoc.fill(phone);
    console.log("✅ Phone number fill sucessfully");
    await this.page.waitForTimeout(2000);

    await qualificationLoc.fill(qualification);
    console.log("✅ Qualification fill sucessfully");
    await this.page.waitForTimeout(2000);

    await experienceLoc.fill(experience);
    console.log("✅ Experience fill sucessfully");
    await this.page.waitForTimeout(2000);

    const submitLoc = this.page.locator("#submitBtn");
    await submitLoc.click();
    console.log("✅ Submit Apllication button click sucessfully");
    await this.page.waitForTimeout(5000);

  }
}

module.exports = { LoginPage };
