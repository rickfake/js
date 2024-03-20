
/******************************

https://integral2.zhijiantime.com/v2/User?ts=1710918016883&sign=238133fbd1fa37bc60287d8c3f37a35d&clientId=1392166974&lang=zh&v=6.4.73&
*******************************



[rewrite_local]

^https?://integral2.zhijiantime.com/v2/User* url script-response-body https://raw.githubusercontent.com/rickfake/js/main/zj.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

const py996 = {};
const rick = JSON.parse(typeof $response != "undefined" && $response.body || null);

rick.ActiveDays=44
rick.VIP=1

$done(py996);
