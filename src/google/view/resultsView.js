// Google: 'google results anatomy' to learn what organic/site links are

var resultsMapping = require('../mapping/resultsMapping');

module.exports = {
    getAllOrganicLinksEl: getAllOrganicLinks,
    getFirstSiteLinkEl: getFirstSiteLink,
    getFirstOrganicLinkEl: getFirstOrganicLink
};

function getFirstSiteLink() {
    var locator = resultsMapping.getSiteLinkLocator();
    driver.wait(until.elementLocated(locator), 5000);
    return driver.findElement(locator);
}

function getFirstOrganicLink() {
    var locator = resultsMapping.getFirstOrganicLinkLocator();
    driver.wait(until.elementLocated(locator),5000);
    return driver.findElement(locator);
}

function getAllOrganicLinks() {
    var locator = resultsMapping.getOrganicLinkLocator();
    driver.wait(until.elementsLocated(locator), 5000);
    return driver.findElements(locator);
}
