module.exports = class Page {
    openMainUrl(path){
        return browser.url(path)
    }
}