
/******************************



*******************************



[rewrite_local]

^https?:\/\/qianjiga\.litangkj\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/rickfake/js/main/js/qj.js

[mitm] 

hostname = qianjiga.litangkj.com

*******************************/

// 解析JSON数据
var responseData = JSON.parse($response);

// 修改userinfo字段
responseData.data.config.userinfo.vipend = "2029-03-20 13:51:53";
responseData.data.config.userinfo.vipstart = "2024-03-20 13:51:53";
responseData.data.config.userinfo.viptype = 2;

// 转换回JSON字符串
var modifiedResponse = JSON.stringify(responseData);

// 输出修改后的JSON数据
console.log(modifiedResponse);

$done(modifiedResponse);
