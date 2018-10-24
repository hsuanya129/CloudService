//Natural Language Understanding Watson Third Party Module and we specify which release we would like to call the Watson NLU Service.
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3.js');
var personality_insights = new PersonalityInsightsV3({
  'version': '2017-10-13',
  'username': '4dacddfd-6efb-4af5-847c-41bc4738fa1d',
  'password': '6RbzRLgRh5yK'
});

exports.personalityAnalyzer = function (req, callback) {

  if (req === null || req.body === null || req.body.url === null) {
    callback("Missing inpot text", null);
  }

  var parameters = {
    content: req.body.words,
    'content_type': 'text/plain',
    'consumption_preferences': true,
    'raw_scores': true
  };

  personality_insights.profile(parameters, function (error, profile) {
    if (error)
      callback(error, null);
    else
      callback(null, profile);
  });


}

