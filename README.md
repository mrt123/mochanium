# mochanium

## Recommended System Configuration
node v6.4.0



## Setup
```
    $ npm install
```

## Run
```
    $ npm test
```

## PATTERN CONVENTION

### General Purpose
* Operator  - encapsulates user interactions, aids user logic when evaluating DOM
* Views - concerned with reliable DOM querying
* Mappings  - help maintain DOM hooks in a large application over time

### In test block
* Use Operator to encapsulate user interaction  eg ``` operator.doSomething();  ```
* Use Operator to aid user logic on evaluating DOM eg ``` assert.equal(operator.isPurchaseComplete(), true); ```
* Use View to fetch DOM for simple assertion eg ``` view.getEl.getText().then(...assert...); ```
* Use View to hide DOM querying, eg ``` operator.results.getNth(5).then(...assert...); ```
* Do not use Mappings

### Avoid
* Bloating operators with DOM evaluating logic that is likely never appear in other test flows. Instead contain logic
 in test block.


## IDE CONFIG
### WebStorm
* switch to ES6
* for auto-complete add these libraries
** 'Node Core Modules'
** create : 'selenium-webdriver'   : add folder 'node_modules/selenium-webdriver/lib'
* for Debug :
** ensure your run configuration:
*** runs from root of this repo ```node start```
*** has correct node interpreter setup (eg: if you're using NVM: /Users/username/.nvm/versions/node/vX.X.X/bin/node)


## Documentation
* [WebdriverJS API](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/)
* [Webdriver Control Flow](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html)
* [Selenium Tips - css selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors)
* [Mocha](https://mochajs.org)
* [Chaijs](http://chaijs.com/guide/styles/)
* [CSS Selectors to use with locators](http://www.w3schools.com/css/css_attribute_selectors.asp)


## Side Notes
* WebDriverIO is a good candidate to run test synchronously via its test runner, however is completly redundant, considering WebdriverJs asynch tasks are coordinated with [Control Flow](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html). And also: 

** works only on select undocumented selenium servers :   [example](http://stackoverflow.com/questions/34536329/webdriverio-firefox-does-not-navigate-to-url-specified)
** supports only a sub-set of WebDriver API
** compatibility with specific Node version is undocumented
** requiresJava Selenium Server downloaded and started separately
** website with guide is not kept up to date, and differs with gitHub readme
