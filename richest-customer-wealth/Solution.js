// https://leetcode.com/problems/richest-customer-wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;
    for(let i = 0; i< accounts.length ;i++){
        let temp = 0;
        let tempArr = accounts[i];
        tempArr.forEach(x=>{temp+=x});
        (res>=temp) ? (res=res):(res=temp);
    }
    return res;
};