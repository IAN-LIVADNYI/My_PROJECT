const Page = require("../pageObjects/_Page");
class OneCompanyPage extends Page {


    get companyPageTitle(){
        return $("//h6");
    }

    get btnBack(){
        return $("//div[@class='btn btn-link']");
    }

}
module.exports = new OneCompanyPage;