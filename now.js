
/******************************


*******************************



[rewrite_local]

^https?://nowapi.navoinfo.cn/h2/user/getUser* url script-response-body https://raw.githubusercontent.com/rickfake/js/main/now.js

^https?://nowapi.navoinfo.cn/h2/user/getUser* url script-request-header https://raw.githubusercontent.com/rickfake/js/main/now.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


$done(py996);
