exports.sanitize = function (word) {
  // console.log('Running sanitize......');
  return word.toLowerCase()
    .replace(/-/g, ' ');
}

exports.tokenize = function (sentence) {
  return sentence.split(' ');
}

exports.info = function (callback) {
  var https = require('https');
  var options = {
    host: 'api.github.com',
    path: '/repos/sayanee/build-podcast',
    method: 'GET',
    headers: {
      'User-Agent': 'sayanee'
    }
  };
  var str = '';
  
  https.request(options, function (response) {
    response.on('data', function (data) {
      str += data;
    });
    
    response.on('end', function () {
      callback(null, JSON.parse(str));
    });
    
    response.on('error', function (error) {
      callback(error);
    });
  })
    .end();
}

exports.infoLang = function (infoFunc, callback) {
  infoFunc(function (err, reply) {
    if (!err) {
      callback('Language is ' + reply.language);
    }
  })
}