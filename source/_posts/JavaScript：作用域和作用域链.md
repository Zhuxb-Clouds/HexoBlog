---
title: JavaScript：作用域和作用域链
copyright: false
date: 2022-03-07 17:42:00
tags: JavaScript
cover: "https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203071744155.webp"
categories:
  - [技术,JavaScript]
---

# 作用域和作用域链

在ES5中，作用域仅分为局部作用域（local Scope）和全局作用域（global Scope），在ES6中则通过let和const构建了块级作用域（一种特殊的局部作用域）

## 一、全局作用域

拥有全局作用域的对象可以在代码的任何地方访问到, 在js中一般有以下几种情形拥有全局作用域:

1.最外层的函数以及最外层变量:

```javascript
var globleVariable= 'global';  // 最外层变量
function globalFunc(){         // 最外层函数
    var childVariable = 'global_child';  //函数内变量
    function childFunc(){        // 内层函数
        console.log(childVariable);
    }
    console.log(globleVariable)
}
console.log(globleVariable);  // global
globalFunc();                 // global
console.log(childVariable)   // childVariable is not defined
console.log(childFunc)       // childFunc is not defined
```

2.未定义直接赋值的变量:

```
function func1(){
    special = 'special_variable';
    var normal = 'normal_variable';
}
func1();
console.log(special);    //special_variable
console.log(normal)     // normal is not defined
```

由于变量提升使没有定义的变量成为全局变量。

然而，即使是定义也存在问题，因为var存在变量覆盖的特性。

## 二、局部作用域

局部作用域一般只能在固定代码片段内可以访问到。最常见的就是**函数作用域**。

### 函数作用域

```
function test(){
    var num = 9;
    // 内部可以访问
    console.log("test中："+num);
}
//test外部不能访问
console.log("test外部:"+num);
```

![image-20220307171137786](https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203071711834.png)

## 三、块级作用域

ES6新增了`let`和`const`命令，可以用来创建块级作用域变量，使用`let`命令声明的变量只在`let`命令所在`代码块`内有效。

let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：

- 变量不会提升到代码块顶部且不允许从外部访问块级作用域内部变量

- 不允许反复声明

## 四、作用域链

### JavaScript执行原理

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/6/27/16b94c342168e6da~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

在了解作用域前，先要理解js是如何执行的。它的执行分为两个阶段：分析阶段和执行阶段，javascript编译器编译完成，生成代码后进行分析

- 分析函数参数
- 分析变量声明
- 分析函数声明

分析阶段的核心，在分析完成后（也就是接下来函数执行阶段的瞬间）会创建一个`AO(Active Object 活动对象)`

分析阶段分析成功后，会把给`AO(Active Object 活动对象)`给执行阶段

- 引擎询问作用域，作用域中是否有这个叫X的变量

- 如果作用域有X变量，引擎会使用这个变量

- 如果作用域中没有，引擎会继续寻找（向上层作用域），如果到了最后都没有找到这个变量，引擎会抛出错误。

  

这里还涉及到LHS和RHS（左右查找），此处不做深入讨论。

JavaScript上每一个函数执行时，会先在自己创建的AO上找对应属性值。若找不到则往父函数的AO上找，再找不到则再上一层的AO,直到找到window（全局作用域）。 而这一条形成的“AO链” 就是JavaScript中的作用域链。

### 什么是作用域链

作用域链是一个独特空间。当一个变量被调用，那么变量在 **被调用** 时所在的局部作用域和全局作用域之间，就形成了一个作用域链。

```
// 定义一个全局作用域变量：
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()) // 'Oluwatobi Sofela'
```

在上述示例中，`fullName` 变量在 `writeName()` 函数作用域中被调用。

因此，从变量的执行作用域到全局作用域之间存在如下作用域链：

**writeName() scope ---> sayName() scope ---> profile() scope ---> global scope**

换言之，从`fullName`变量的执行作用域到它的词法作用域（此处指全局作用域）之间有4层作用域。

**注意：** 在 JavaScript作用域链中，全局作用域是整个作用域链的终点。
