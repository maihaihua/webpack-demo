
require.ensure(["moment"],function(require){
    var moment = require("moment");
    console.log(moment().format());
},"async")