// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

//  

// 示例 1：

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
// 示例 2：

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。
// 示例 3：

// 输入：digits = [0]
// 输出：[1]\


//在数组长度低于一定的情况下，可以使用以下方法

// var plusOne = function (digits) {
//     let str = ""
//     for (let i = 0; i < digits.length; i++) {
//         str = str + digits[i].toString()

//     }
//     let num = BigInt( parseInt(str) + 1)
//     // result =
//     return num.toString().split('').map(a=>+a)
// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

console.log("Start");
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        console.log(digits[i]);
        if (digits[i] != 9) {
            console.log(i, digits[i]);
            digits[i] = digits[i] + 1

            return digits
        }
        digits[i] = 0
    }
    
    let result=[1]
    for (let i = 0; i < digits.length; i++) {
        result.push(0)
    }
    return result
};

console.log(plusOne([9, 9]));

