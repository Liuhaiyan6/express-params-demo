let express = require('express');

let app = express();

app.get('/zipcode-to-barcode/:zipcode', function(req, res) {
  let zipcode = req.params.zipcode;
  res.send(zipcode);
});

app.listen(3000, function() {
  console.log('listening on 3000');
});