var browserServices={};browserServices.checkBrowser=function(){var e;return("chrome"in window||"firefoxApi"in window)&&(e="chrome"),-1==navigator.userAgent.toLowerCase().indexOf("chrom")&&-1!=navigator.userAgent.toLowerCase().indexOf("safari")&&(e="safari"),e},browserServices.getChromeLocalisation=function(e,r,o){o(chrome.i18n.getMessage(e),r)},browserServices.getFirefoxLocalisation=function(e,r,o){firefoxApi.getTranslation(e,r,o)},browserServices.getLocalisation=function(e,r,o){var i=browserServices.checkBrowser();"chrome"!=i&&"firefox"!=i||browserServices.getChromeLocalisation(e,r,o)},browserServices.clearChromeAlarm=function(e){chrome.alarms.clear(e)},browserServices.clearFirefoxAlarm=function(e){},browserServices.clearAlarm=function(e){var r=browserServices.checkBrowser();"chrome"!=r&&"firefox"!=r||browserServices.clearChromeAlarm(e)},browserServices.createChromeAlarm=function(e,r){chrome.alarms.create(e,r)},browserServices.createFirefoxAlarm=function(e,r){},browserServices.createAlarm=function(e,r){var o=browserServices.checkBrowser();"chrome"!=o&&"firefox"!=o||browserServices.createChromeAlarm(e,r)},browserServices.getChromeStorage=function(e,r){chrome.storage.sync.get(e,r)},browserServices.getFirefoxStorage=function(e,r){firefoxApi.getStorage(e,r)},browserServices.getStorage=function(e,r){var o=browserServices.checkBrowser();"chrome"!=o&&"firefox"!=o||browserServices.getChromeStorage(e,r)},browserServices.setChromeStorage=function(e){chrome.storage.sync.set(e)},browserServices.setFirefoxStorage=function(e){firefoxApi.saveStorage(e)},browserServices.setStorage=function(e){var r=browserServices.checkBrowser();"chrome"!=r&&"firefox"!=r||browserServices.setChromeStorage(e)},browserServices.getChromeFilePath=function(e){return e},browserServices.getFirefoxFilePath=function(e){return"resource://carbon-footprint/data"+e},browserServices.getSafariFilePath=function(e){return(safari.extension.baseURI+e).replace(/(\w)\/\//,"$1/")},browserServices.getFilePath=function(e){var r=browserServices.checkBrowser();return"chrome"==r||"firefox"==r?browserServices.getChromeFilePath(e):"safari"==r?browserServices.getSafariFilePath(e):void 0};