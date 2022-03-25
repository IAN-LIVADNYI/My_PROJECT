const LoginPage = require("../pageObjects/LoginPage");
const loginData = require("../data/loginData");
const PublicationPage = require("../pageObjects/PublicationsPage");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
const {clearInput} = require("../helpers/uiMethods");
const email = loginData.regularUserCredentials.email;
const password = loginData.regularUserCredentials.password;

describe("LoginPage_1: Functionality Testing", () => {
    before(async () => {
        browser.maximizeWindow();
    })

    it('LP-1: User should be logged in through Positive test', async ()=> {
        await LoginPage.login(email, password);

        await expect(await PublicationPage.publicationsTitle.getText()).toEqual("publications");
    });

    it('LP-2: Without Password: User should get a modal alert', async ()=> {
        await GlobalNavigationPage.getToLogOut();
        await LoginPage.inputEmail.setValue(email);
        await LoginPage.buttonLogin.click();

        await expect(await LoginPage.inputPassword.getValue()).toEqual("")
    });

    it('LP-3: Without Email: User should get a modal alert', async ()=> {
        await clearInput(LoginPage.inputEmail);
        await LoginPage.inputPassword.setValue(password);
        await LoginPage.buttonLogin.click();

        await expect(await LoginPage.inputEmail.getValue()).toEqual("")
    });
})