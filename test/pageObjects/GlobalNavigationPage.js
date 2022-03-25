const Page = require("./_Page");
class GlobalNavigationPage extends Page {

    openGlobalNavigationPage(){
        return super.openUrl('/publications');
    }

    async getToLogOut(){
        await this.clickMenu();
        await this.clickLogOut();
    }

    get buttonMenu(){
       return $("#nav-bar-toggle")
    }

    async clickMenu(){
        await this.buttonMenu.click();
    }

    get buttonPeople(){
        return $("#people")
    }

    async clickPeople(){
        await this.buttonPeople.click();
    }

    get buttonPublications(){
        return $("#publications")
    }

    async clickPublications(){
        await this.buttonPublications.click();
    }

    get buttonCompanies(){
        return $("#companies");
    }

    async clickCompanies(){
        await this.buttonCompanies.click();
    }

    get buttonProblems(){
        return $("#problems");
    }

    async clickProblems(){
        await this.buttonProblems.click();
    }

    get buttonProfile(){
        return $("#profile");
    }

    async clickProfile(){
        await this.buttonProfile.click();
    }

    get buttonLogout(){
    return $("#logout");
    }

    async clickLogOut(){
        await this.buttonLogout.click();
    }

}

module.exports = new GlobalNavigationPage();