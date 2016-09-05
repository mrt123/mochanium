var searchMapping = require('../mapping/searchMapping');


module.exports = {
    getInput: getInput,
    getButton: getButton
};

function getInput() {
    var locator = searchMapping.getInputLocator();
    return util.getWhenLocated(locator, 5000);
}

function getButton() {
    var locator = searchMapping.getButtonLocator();
    return util.getWhenLocated(locator, 5000);
}