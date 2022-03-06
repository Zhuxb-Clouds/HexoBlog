---
title: Var、let、const的异同
date: 2022-03-05 19:51:25
tags: JavaScript
cover: "https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203052139275.webp"
categories: 
  - [技术,JavaScript]
---

# Var、let、const的异同

## 一、var概述

在JavaScriptES5之前，js使用var关键字来创建变量。

但是，var却有三个致命的问题。

### 1.赋值提升

```javascript
console.log(text) //undefined

var text = "Hello"
```

一般来说，text在log语句之下才声明，按照js单线程来说，这个位置理当报错，然而在执行的时候，log却返回的是undefined。这证明上面的代码块与下面的代码块等效。

```javascript
var text;

console.log(text)

text = "Hello"
```

这便是赋值提升。

### 2.声明覆盖

```
var a = "Hello"
var a = "world"
console.log(a) //"world"
```

这里明明a已经声明过一次，第二次居然还能再一次声明并赋值，这是不合理的。

在项目中，如果依然保持声明覆盖是很危险的。

### 3.私有作用域的缺失

```
for (var i = 0; i < 2; i++) {
    console.log(i)
}
console.log(i)
/*
0
1
2
3
*/
```

i这个变量明明是在for循环内声明的，在外部居然也能访问到，这是很不合理的。非常容易造成变量污染的问题。

## 二、let和const

在ES6，let很好的解决了var的三个问题。不如说let就是一个仿造面向对象语言制作出来的升级版的var。

除此之外，ES6还提出了const（常量）。const与let相同，一样解决了var的三个问题并且拥有块级作用域。但是他也有一个自我的特性：不可更改。

```
const pi =3.14
pi = 3 //Uncaught TypeError: Assignment to constant variable.
```

当const声明基本类型变量的时候，变量是无法被更改或是再次赋值的。

但是，如果是一个应用数据类型的话：

```
const pi =[0,3,10]
pi[0] = 3
console.log(pi);//(3) [3, 3, 10]
```

