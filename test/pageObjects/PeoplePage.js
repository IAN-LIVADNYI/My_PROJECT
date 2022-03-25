const Page = require("./_Page");
const GlobalNavigationPage = require(".//GlobalNavigationPage");
class PeoplePage extends Page {

    openPeoplePage() {
        return super.openUrl("/users");
    }

    async getToPeoplePage() {
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickPeople();
    }

    get peopleTitle() {
        return $("//h6")
    }

    get firstUserImage() {
        return $("(//div/a[@href])[1]");
    }

    get firstUserTitle() {
        return $("(//div[@title])[1]");
    }

    get firstUserJobTitle() {
        return $("(//a/div[2][@title])[1]")
    }

    get firstUserLink() {
        return $("(//div[@class = 'ml-2 user-text'])[1]");
    }
}
module.exports = new PeoplePage();