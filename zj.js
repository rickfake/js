
/******************************

*******************************



[rewrite_local]
^https:\/\/integral2\.zhijiantime.com\/vip\/User*$  url script-response-body https://raw.githubusercontent.com/rickfake/js/main/zj.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

const py996 = {};
const rick = JSON.parse(typeof $response != "undefined" && $response.body || null);

rick.ActiveDays=44
rick.VIP=1

$done(py996);