function setCookie(key, value, indate) {
    var date = new Date();
    date.setTime(date.getTime() - 8 * 60 * 60 * 1000 + indate * 1000);
    document.cookie = key + "=" + value + ";expires=" + date + ";path=/";
}
/**
 * 获取cookie的方法
 * @param {*} key 要获取的键
 */
function getCookie(key) {
    var str = document.cookie; // name=翠花; age=20; sex=男
    var arr = str.split("; ");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var arr1 = arr[i].split("=");
        if (arr1[0] == key) {
            return arr1[1];
        }
    }
}
/**
 * 删除cookie的方法
 * @param {*} key 要删除的指定的键
 */
function delCookie(key) {
    setCookie(key, "", -1);
}