const Page = require("./_Page");
class LoginPage extends Page {

    openLoginPage(){
        return super.openUrl("/login");
    }

    get inputEmail(){
       return $("#email")
    }

    get inputPassword(){
       return $("#password")
    }

    get buttonLogin(){
       return $('button[type="submit"]')
    }

    get titleOfInputEmailBox(){
        return $("#email-label");
    }

    get titleOfInputPasswordBox(){
        return $("#password-label");
    }

    get btnLogin(){
        return $("//button[@type='submit']");
    }

    async login(userEmail, password) {
        await this.openLoginPage();
        await this.inputEmail.setValue(userEmail);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }

    get modalAlert() {
        return $("//content[contains(text(),'Please fill out this field.')]")
    }

}

module.exports = new LoginPage();