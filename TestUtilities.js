let jsonData = require('./Users.json');


function getWebsiteUrl(){

    return  jsonData.Website_Url;
}

function  getUserame() {

    return jsonData.adminUser.username;

}

function  getPassword() {

    return jsonData.adminUser.password;

}


module.exports.getWebsiteUrl = getWebsiteUrl;
module.exports.getUserame = getUserame;
module.exports.getPassword = getPassword;