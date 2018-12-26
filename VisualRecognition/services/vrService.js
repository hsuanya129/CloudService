// read the visual recognition service api document

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: 'qHgrgTt81nqJ3_mUetxEvdGLlwbuAnJ4ZTxZ_OVT7zWX'

});



exports.visualRecognizer = function (request, callback) {

  var fs = require('fs');

  var images_file = fs.createReadStream('./fruitbowl.jpg');
  var owners = ["me"];
  var threshold = 0.6;

  var params = {
    images_file: images_file,
    owners: owners,
    threshold: threshold
  };

  visualRecognition.classify(params, function (err, response) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(JSON.stringify(response, null, 2))
      callback(JSON.stringify(response, null, 2));
    }
  });

}
