require('chromedriver');

global.webdriver = require('selenium-webdriver');
global.By = webdriver.By;
global.until = webdriver.until;
global.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();