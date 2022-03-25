const Page = require("../pageObjects/_Page");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
const ProblemsPage = require("../pageObjects/ProblemsPage");
class ProblemCreatePage extends Page{

    openProblemCreatePage(){
        return super.openUrl("/problems/create");
    }

    async getToProblemCreatePage(){
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickProblems();
        await ProblemsPage.newProblem.click();
    }

    get inputTitle(){
        return $("#title");
    }

    get inputCompanyName(){
        return $("#company");
    }

    get inputPosition(){
        return $("#position");
    }

    get inputContent(){
        return $("//textarea");
    }

    get btnSave(){
        return $("//button[text()='Save']");
    }

}

module.exports = new ProblemCreatePage();