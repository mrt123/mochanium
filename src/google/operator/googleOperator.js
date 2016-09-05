var resultsView = require('../../google/view/resultsView');
var searchView = require('../../google/view/searchView');


module.exports = {
    search: search
};


function search(keyword) {
    var input = searchView.getInput();
    var button = searchView.getButton();
    input.sendKeys(keyword);
    button.click();
}
