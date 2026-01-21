const {test} = require ('@playwright/test');

const {LoginPage} = require("../pages/LoginPage");

test('Verify Job Application Form', async ({ page }) => {
    const loginPage = new LoginPage(page);

    const username = "Saloni@231";
    const password = "Saloni@1234";
    const fullname = "Saloni Singh";
    const email = "saloniAutomationTest@gmail.com";
    const phone = "1234567892";
    const qualification = "Bachlore of technology";
    const experience = "Fresher";

    await loginPage.navigate();
    await loginPage.login(username,password);
    await loginPage.fillJobApllication(fullname,email,phone,qualification,experience);


});