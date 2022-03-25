const Page = require(".//_Page");
class PublicProfilePage extends Page{

    get firstUserURL(){
        return $("(//div/a[@href])[1]");
    }

    openPublicProfilePage(){
        return super.openUrl(`/user/${this.firstUserURL}`)
    }

    get publicProfileTitle(){
        return $("//h6")
    }
}

module.exports = new PublicProfilePage;