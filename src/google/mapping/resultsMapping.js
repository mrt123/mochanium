// Google: 'google results anatomy' to learn what organic/site links are

var ROOT_CSS = 'div#res';

module.exports = {
    getOrganicLinkLocator: getAllOrganicLinksLocator,
    getSiteLinkLocator: getSiteLinkLocator,
    getFirstOrganicLinkLocator: getFirstOrganicLinkLocator,
};

function getAllOrganicLinksLocator() {
    return By.css(ROOT_CSS + ' div.srg div.g a');
}

function getFirstOrganicLinkLocator() {
    return By.css(ROOT_CSS + ' div.srg div.g a:first-of-type');
}

function getSiteLinkLocator() {
    return By.css(ROOT_CSS + ' div.g a');
}