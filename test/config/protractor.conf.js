exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '../e2e/**/*.e2e.js'
  ],
  baseUrl: 'http://127.0.0.1:8000',

  jasmineNodeOpts: {
    showColors: true,
  }
};
