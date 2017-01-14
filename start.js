var seleniumDrivers = require('selenium-drivers');

seleniumDrivers.init({
    browserName: 'chrome',
    download: true
}).then(function () {
    require('./tools/initAssert');
    require('./tools/initWebDriver');
    require('./tools/initUtils');
    require('./tools/runMocha');
});