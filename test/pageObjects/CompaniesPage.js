const Page = require(".//_Page");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
class CompaniesPage extends Page {

    get companiesPageTitle() {
        return $("//h6");
    }

    async getToCompaniesPage() {
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickCompanies();
    }

    trimStringLeaveNumber(problemString) {
        let newString = '';
        for (let i = problemString.length - 1; i >= 0; i--) {
            if (problemString[i] !== " ") {
                newString += problemString[i]
            } else break;
        }

        return newString.split("").reverse().join("");
    }

    trimString(problemString) {
        let newString = '';
        for (let i = 0; i < problemString.length; i++) {
            if (problemString[i] !== ' ') {
                newString += problemString[i]
            } else break;
        }
        return newString;
    }

    get problemsFirstCompany() {
        return $("(//div[@class= 'mt-auto'])[1]");
    }

    get imageFirstCompany() {
        return $("(//div[@class= 'image'])[1]");
    }

    get nameFirstCompany() {
        return $("(//h2[@title])[1]");
    }

    anyCompanyCardXpath = "//div[@class]/a[@class]";

    get elemAnyCompanyCardXpath(){
        return $("//div[@class]/a[@class]")
    }


    getBooleanNoMoreThan9(numOfRes, number){
        return !!(numOfRes <= number & numOfRes !== 0);
    }

    getBooleanNoMoreThan18(numOfRes, number){
        return !!(numOfRes <= number & numOfRes !== 0);
    }

    get firstCompanyCard(){
        return $("(//div[@class='d-flex flex-wrap']/div/div)[1]");
    }

    selectorForAnyCompanyTitle = '//h2[@title]';

}

module.exports = new CompaniesPage();