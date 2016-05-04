var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var word = require('../index');

describe('GitHub API', function () {


  describe('GitHub info', function () {

    it('returns repo info from github', function (done) {
      word.info(function (error, reply) {
        // if (error) console.error(error);
        // console.log(reply);
        expect(reply.language).to.equal('HTML');
        expect(reply.watchers).to.equal(263)

        done();
      });
    });

  });

  describe('Info Language', function () {

    it('returns language info of the repo', function (done) {
      var ghRepo = {
        'language': 'Assembly'
      };
      var stub = sinon.stub().callsArgWith(0, null, ghRepo);

      word.infoLang(stub, function (reply) {
        expect(reply).to.equal('Language is Assembly');
        done();
      });

    });

  });

});