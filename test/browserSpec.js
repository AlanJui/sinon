var webDriver = require('selenium-webdriver');
var client = new webDriver.Builder().withCapabilities({
  'browserName': 'chrome'
}).build();

var chai = require('chai');
var expect = chai.expect;

describe('from Homepage', function () {
  var url = 'http://localhost:8000';
  
  beforeEach(function (done) {
    client.get(url).then(function () {
      done();
    });
  });
  
  after(function (done) {
    client.quit().then(function () {
      done();
    });
  });
  
  it('returns the title of the page', function (done) {
    client.getTitle().then(function (title) {
      expect(title).to.equal('Browser Testing');
      done();
    });
  });
  
  it('returns the header 1 test of the page', function (done) {
    client.findElement(webDriver.By.id('header')).getText()
      .then(function (text) {
        expect(text).to.equal('Hello!');
        done();
      });
  });
});
  