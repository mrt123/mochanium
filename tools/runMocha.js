var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');


var DEFAULT_CASE_TIMEOUT = 6000;  // eg: on W-LAN it may take 5 sec to load google results
var TEST_DIR = 'src/google/testCases';
var DEFAULT_TEST_WEBSITE = 'http://www.google.ie';

var mocha = new Mocha({
    timeout: DEFAULT_CASE_TIMEOUT
});

// Add each .js file to the mocha instance
fs
    .readdirSync(TEST_DIR).filter(function (file) {
        return file.substr(-3) === '.js';
    })
    .forEach(function (file) {
        mocha.addFile(
            path.join(TEST_DIR, file)
        );
    });

mocha.run(function (failures) {

    if (failures === 0) {
        driver.quit();
    }
    else {
        driver.quit();
    }

    process.on('exit', function () {
        process.exit(failures);  // exit with non-zero status if there were failures
    });
});

before(function() {
    console.log('----------global setup--------');
});

after(function() {
    console.log('----------global teardown--------');
});