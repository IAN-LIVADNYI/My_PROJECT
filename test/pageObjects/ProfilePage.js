const Page = require(".//_Page");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
class ProfilePage extends Page{

    async getToProfilePage(){
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickProfile();
    }

    get title(){
        return $("//h6")
    }

}
module.exports = new ProfilePage();
