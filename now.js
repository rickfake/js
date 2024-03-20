
/******************************


*******************************



[rewrite_local]

^https?://nowapi.navoinfo.cn/h2/user/getUser* url script-response-body https://raw.githubusercontent.com/rickfake/js/main/now.js

^https?://nowapi.navoinfo.cn/h2/user/getUser* url script-request-header https://raw.githubusercontent.com/rickfake/js/main/now.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var body = $response.body.replace(/"VIP":\w+/, '"is_vip" : true');
var body = $response.body.replace(/"expire_time":\w+/, '"expire_time" : "9999-09-09T09:09:09Z"')
$done({ body });
