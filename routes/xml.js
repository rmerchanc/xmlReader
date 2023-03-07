var express = require('express');
var router = express.Router();
const {XMLParser, XMLBuilder, XMLValidator} = require('fast-xml-parser');
const options = { ignoreAttributes : true};
const parser = new XMLParser(options);
router.get('/', function(req, res, next) {
let jsonObj = '';
if(req.data){
jsonObj = parser.parse(req.data);
console.log(jsonObj.CATALOG.PLANT);
}
res.render('xml', { title:'XML Plant Reader', data:jsonObj});
});
module.exports = router;