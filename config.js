exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['scripts/*.spec.js'],

    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '5.0.2',
        deviceName: 'Android Emulator',
    },

    baseUrl: 'http://10.0.2.2:8000'
};