---
title: JavaScript：call、apply、bind的异同
copyright: false
date: 2022-03-07 16:40:48
tags: JavaScript
cover: "https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203071642106.webp"
categories: 
  - [技术,JavaScript]
---

# JavaScript：call、apply、bind的异同

**首先，call()、apply()、bind() 都是用来重定义 this 对象的。**

在ES5中，this总是指向最后调用函数的对象。

## this对象

```
    var name = "windowsName";
    function a() {
        var name = "Cherry";

        console.log(this.name);          // windowsName

        console.log("inner:" + this);    // inner: Window
    }
    a();
    console.log("outer:" + this)         // outer: Window
```

 `a();`因为前面没有调用的对象、那么就是全局对象 window，这就相当于是 `window.a()`

```
    var name = "windowsName";
    var a = {
        name: "Cherry",
        fn : function () {
            console.log(this.name);      // Cherry
        }
    }
    a.fn();
```

在这个例子中，函数 fn 是对象 a 调用的，所以打印的值就是 a 中的 name 的值。

```
var name = "windowsName";
    var a = {
        name: "Cherry",
        fn : function () {
            console.log(this.name);      // Cherry
        }
    }
    window.a.fn();
```

此处对象依然是a调用的。

然而，请看下面这个例子：

```
    var name = "windowsName";
    var a = {
        // name: "Cherry",
        fn : function () {
            console.log(this.name);      // undefined
        }
    }
    window.a.fn();
```

这里为什么会打印 `undefined` 呢？这是因为正如刚刚所描述的那样，调用 fn 的是 a 对象，也就是说 fn 的内部的 this 是对象 a，而对象 a 中并没有对 name 进行定义，所以 log 的 `this.name` 的值是 `undefined`。

```
    var name = "windowsName";
    var a = {
        name : null,
        // name: "Cherry",
        fn : function () {
            console.log(this.name);      // windowsName
        }
    }

    var f = a.fn;
    f();
```

此处有一点很容易错误的，虽然f拥有a.fn()的方法，但是调用它的仍然是windows。

## call、apply

 apply 和 call 基本类似，他们的区别只是传入的参数不同。

call() 与apply()只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**。

call：

```
function.call(thisArg, arg1, arg2, ...)
```

apply：

```
func.apply(thisArg, [argsArray])
```

## bind

bind与其他两者不同的是，它返回的是一个函数，而其他的参数会作为这个返回函数的参数传递。

**bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 `this` 被指定为 `bind()`的第一个参数，而其余参数将作为新函数的参数，供调用时使用。**

bind：

```
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 柯里化（curry）

bind还涉及一个柯里化的问题，在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

举例来说，一个接收3个参数的普通函数，在进行柯里化后， 柯里化版本的函数接收一个参数并返回接收下一个参数的函数， 该函数返回一个接收第三个参数的函数。 最后一个函数在接收第三个参数后， 将之前接收到的三个参数应用于原普通函数中，并返回最终结果。

柯里化的目的是为了复用参数，通过封装代码提升代码复用度。
