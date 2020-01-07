/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
*/

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
      return ''
    }
    if (strs.length === 1) {
      return strs[0]
    }
    let strTmp = strs[0];
    let result = ''

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][0] !== strTmp[0]) {
        return ''
      }
      if (strs[i].substr(0, strTmp.length) === strTmp) {
        result = strTmp;
        continue;
      }
      result = ''
      for (let j = 0; j < strTmp.length; j++) {
        if (strs[i][j] === strTmp[j]) {
          result += strTmp[j]
        } else {
          strTmp = result;
          break
        }
      }
    }
    return result
};