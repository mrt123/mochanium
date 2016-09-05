// Google: 'google results anatomy' to learn what organic/site links are

var ROOT_CSS = 'div#res';

module.exports = {
    getSiteLinkLocator: getSiteLinkLocator,
    getFirstOrganicLinkLocator: getFirstOrganicLinkLocator,
    getAllOrganicLinksLocator: getAllOrganicLinksLocator

};

function getSiteLinkLocator() {
    return By.css(ROOT_CSS + ' div.g a');
}

function getFirstOrganicLinkLocator() {
    return By.css(ROOT_CSS + ' div.srg div.g a:first-of-type');
}

function getAllOrganicLinksLocator() {
    return By.css(ROOT_CSS + ' div.srg div.g a');
}