const ProblemsPage = require("../pageObjects/ProblemsPage");
const LoginPage = require("../pageObjects/LoginPage");
const loginData = require("../data/loginData");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");

describe('PP-1: Functional Testing',() => {
    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login(loginData.regularUserCredentials.email,loginData.regularUserCredentials.password);
    })

    it('Verify the fact it is the Problems page ', async () => {
        await ProblemsPage.getToProblemsPage();

        await expect(await ProblemsPage.problemsPageTitle.getText()).toEqual("problems")
    });
})