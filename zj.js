
/******************************

*******************************



[rewrite_local]
^https?://api.revenuecat.com/.+/(receipts$|subscribers/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/rickfake/js/main/qj.js


[mitm] 

hostname = integral2.zhijiantime.com

*******************************/

const rick = JSON.parse(typeof $response != "undefined" && $response.body || null);

rick.data.ActiveDays=44
rick.data.VIP=1

$done(rick);
