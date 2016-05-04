var word = require('./index');

// word.info(function (err, reply) {
//   if (!err) {
//     console.log(reply.language);
//   }
// });

word.infoLang(word.info, function (result) {
  console.log(result);
});