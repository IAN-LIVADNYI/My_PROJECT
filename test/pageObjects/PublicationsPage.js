const Page = require(".//_Page");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
class PublicationsPage extends Page{

    openPublicationsPage(){
        return super.openUrl("/publications");
    }

    async getToPublicationsPage(){
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickPublications();
    }

    get publicationsTitle(){
        return $("//h6");
    }
}

module.exports = new PublicationsPage();