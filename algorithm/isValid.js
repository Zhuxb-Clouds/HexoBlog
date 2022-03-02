// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

var isValid = function (s) {
    if (s.length % 2 == 1) return false
    const st = []
    for (let c of s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c)
        } else {
            if (!st.length) return false
            const topChar = st[st.length-1]
            if(c==')'&& topChar !='(')return false
            if(c==']'&& topChar !='[')return false
            if(c=='}'&& topChar !='{')return false
            st.pop()
        }
    }
    return !st.length
};

// var isValid1 = function (s) {
//     if (s.length % 2 == 1) return false
//     const st = []
//     for (const c of s) {
//         if (c == '(' || c == '[' || c == '{') {
//             st.push(c)
//         } else {
//             if (!st.length) return false
//             const topChar = st[st.length - 1]
//             if (c == ')' && topChar != '(') return false;
//             if (c == ']' && topChar != '[') return false;
//             if (c == '}' && topChar != '{') return false;
//             st.pop();
//         }
//     }
//     return !st.length
// };