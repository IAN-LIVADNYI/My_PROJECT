module.exports = class Page {
    openUrl(path){
        return browser.url(path)
    }
}