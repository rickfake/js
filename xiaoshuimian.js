/******************************

oooo
*******************************



[rewrite_local]

^https?://api.psy-1.com/cosleep/user/info*  url script-response-body https://raw.githubusercontent.com/rickfake/js/main/xiaoshuimian.js

[mitm] 

hostname = api.psy-1.com

*******************************/

var body = $response.body.replace(/is_vip":\d/g,'is_vip":1');
var body = $response.body.replace(/vip_expires":\d/g,'vip_expires":2');

$done({ body });
