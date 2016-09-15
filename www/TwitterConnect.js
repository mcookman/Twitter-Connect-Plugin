var exec = require('cordova/exec');

var TwitterConnect = {
    login: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'TwitterConnect', 'login', []);
    },
    logout: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'TwitterConnect', 'logout', []);
    },
    showUser: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'TwitterConnect', 'showUser', []);
    },
    statusUpdate: function (successCallback, errorCallback, status) {
        exec(successCallback, errorCallback, 'TwitterConnect', 'statusUpdate', [status]);
    }
};

module.exports = TwitterConnect;
