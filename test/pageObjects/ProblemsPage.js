const Page = require("./_Page");
const GlobalNavigationPage = require("../pageObjects/GlobalNavigationPage");
class ProblemsPage extends Page {

    openProblemPage(){
       return super.openUrl("/problems");
    }

    async getToProblemsPage(){
        await GlobalNavigationPage.clickMenu();
        await GlobalNavigationPage.clickProblems();
    }

    get problemsPageTitle() {
        return $("//h6");
    }

    get newProblem(){
        return $("//button[text()='New Problem']");
    }

    get btnColumns(){
        return $("//button[text()='Columns']");
    }

    get btnFilters(){
        return $("//button[text()='Filters']");
    }

    get btnDensity(){
        return $("//button[text()='Density']");
    }

    get btnExport(){
        return $("//button[text()='Export']");
    }

    get btnProblemName(){
        return $("//div[text()='Problem name']");
    }

    get menuProblemName(){
        return $("//button[@id='mui-94']//*[name()='svg']");
    }

    get btnPosition(){
        return $("//div[text()='Position']");
    }

    get menuPosition(){
        return $("//button[@id='mui-97']/*[name()='svg']");
    }

    get btnCompany(){
        return $("//div[text()='Company']");
    }

    get menuCompany(){
        return $("//button[@id='mui-100']/*[name()='svg']");
    }

    get btnSolutions(){
        return $("//div[text()='Solutions']");
    }

    get menuSolutions(){
        return $("//button[@id='mui-103']/*[name()='svg']");
    }

    get btnCreator(){
        return $("//div[text()='Creator']");
    }

    get menuCreator(){
        return $("//button[@id='mui-106']/*[name()='svg']");
    }

    get btnLeftArrow(){
        return $("//button[@title='Go to previous page']/*[name()='svg']");
    }

    get btnRightArrow(){
        return $("//button[@title='Go to next page']/*[name()='svg']");
    }

}
module.exports = new ProblemsPage();