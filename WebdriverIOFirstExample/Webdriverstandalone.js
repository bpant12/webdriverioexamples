var webdriver = require('webdriverio');
var options = {desiredCapabilities:{browserName:'chrome'}};
var client = webdriver.remote(options);
client.init().url('http://wikipedia.org')
.setValue('//*[@id="searchInput"]','Mount Everest')
.click('#search-form > fieldset > button > i')
  
.getText('//*[@id="firstHeading"]').then(function(titleText){
  console.log('Title -->'+ titleText);
});



client.end();