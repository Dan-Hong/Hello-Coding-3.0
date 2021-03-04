const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) { 
  res.sendFile(path.join(__dirname,'/home.html'));
}); 
router.get('/contact', function(req,res) {
  res.sendFile(path.join(__dirname,'/contact.html'));
});

app.use('/', router);
app.use('/contact', router);
app.use(function(req, res, next){
  res.status(404);
  res.sendFile(path.join(__dirname, '/errorPage.html'));
});
app.listen(8080, function() {
  console.log("Server is running on Port 8080");
});