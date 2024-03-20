/******************************

oooo
*******************************



[rewrite_local]

^https?://integral2.zhijiantime.com/v2/User*  url script-response-body https://raw.githubusercontent.com/rickfake/js/main/zj.js

[mitm] 

hostname = integral2.zhijiantime.com

*******************************/

var body = $response.body.replace(/VIP":\d/g,'VIP":1')
$done({ body });
