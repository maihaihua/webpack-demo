var moment = require("moment");

require('./css/a.css');

console.log(moment().format());

document.getElementById("result").innerHTML = moment().format();