const Page = require("./Page");
class PeoplePage extends Page{

OpenPeoplePage(){
    return super.openMainUrl("/users");
}



}
module.exports = new PeoplePage();