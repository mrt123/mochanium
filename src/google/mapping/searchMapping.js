var ROOT_CSS = 'div#searchform';

module.exports = {
    getInputLocator: getInputLocator,
    getButtonLocator: getButtonLocator
};

function getInputLocator() {
    return By.css(ROOT_CSS + ' input.gsfi');
}

function getButtonLocator() {
    return By.css(ROOT_CSS + ' button');
}