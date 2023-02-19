// https://leetcode.com/problems/defanging-an-ip-address

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let res = '';
    for(let i=0;i<address.length;i++){
        if (address[i]==="."){
            res+= "[";
            res+=address[i];
            res+="]"
        }
        else{
            res+=address[i];
        }
    }
    return res;
};