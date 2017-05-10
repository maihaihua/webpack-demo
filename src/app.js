require("./css/a.css");
setTimeout(function () {
    require.ensure(["moment"], function (require) {
        var moment = require("moment");
        console.log(moment().format());
        document.getElementById("result").innerHTML = moment().format();
    }, "async")
}, 5000);
