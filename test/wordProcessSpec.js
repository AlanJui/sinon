var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var word = require('../index');

describe('Word processing', function () {

  describe('Sanitize', function () {

    it('returns lowercase of a string', function () {
      var inputWord = 'HELLO WORLD';
      var outputWord = word.sanitize(inputWord);

      expect(outputWord).to.equal('hello world');
      expect(outputWord).to.not.equal('Hello World');
      expect(outputWord).to.be.a('string');
      expect(outputWord).to.not.be.a('number');
      expect(outputWord).to.contain('hello');
    });

    it('remove any hyphen', function () {
      var inputWord = 'HELLO-WORLD';
      var outputWord = word.sanitize(inputWord);

      expect(outputWord).to.equal('hello world');
    });

  });

  describe('Tokenize', function () {

    it('returns an array of words', function () {
      var sentence = 'hello world';
      var tokenizedSentence = word.tokenize(sentence);

      expect(tokenizedSentence).to.include.members(['hello', 'world']);
    });

  });

});