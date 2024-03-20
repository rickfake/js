
/******************************

*******************************



[rewrite_local]

^https?:\/\/integral2\.zhijiantime.com\/v2\/User*  url script-response-body https://raw.githubusercontent.com/rickfake/js/main/zj.js

[mitm] 

hostname = integral2.zhijiantime.com

*******************************/

const rick = JSON.parse(typeof $response != "undefined" && $response.body || null);

rick.data.ActiveDays=44
rick.data.VIP=1

$done(rick);
