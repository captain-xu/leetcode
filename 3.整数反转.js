/*
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
*/
var reverse = function(x) {
  let addon = 1;
  if (x < 0) {
    addon = -1
  }
  let arr = String(x*addon).split('')
  arr.reverse()
  
  let result = arr.join('')*addon
  // const range = Math.pow(2,31)
  if (result > 2147483646 || result < -2147483647) {
    result = 0
  }
  return result
};

reverse(1534236469)