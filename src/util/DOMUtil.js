module.exports = {
    getWhenLocated: getWhenLocated
};

function getWhenLocated(locator, waitTime) {
    driver.wait(until.elementLocated(locator), waitTime);
    return driver.findElement(locator);
}