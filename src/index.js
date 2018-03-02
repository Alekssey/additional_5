module.exports = function check(str, bracketsConfig) {
  // your solution
    str = str.split('');
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < str.length; j++) {

            if (bracketsConfig[i][0] == str[j] && str[j + 1] == bracketsConfig[i][1]) {
                str.splice(j, 2);
                i=0;
                j = -1;
            }
        }
    }
    if (str.length != 0) {
        return false;
    }
    else {
        return true;
    }
}
