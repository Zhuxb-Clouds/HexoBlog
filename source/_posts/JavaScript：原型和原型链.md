---
title: JavaScript：原型和原型链
copyright: false
date: 2022-03-08 14:48:42
tags: JavaScript
cover: "https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203081451787.webp"
categories:
  - [技术,JavaScript]
---

js中数据类型分为基础数据类型：number、string、boolean、undefined、null、bigInt、Symbol，和引用数据类型：Object、Array、Function。

js脚本中的任意一个对象都可以识别成以上某一种类型。

# 原型

原型分为显式原型`[[prototype]]`和隐式原型`[[__proto__]]`他们不同时存在与一个对象上，而是一个存在构造函数上一个存在实例之上。

一般来说，构造函数的显式原型对象就是实例的隐式原型对象，即`Object.prototype==obj.__proto__`

# 原型链

实例有原型，那么它的上层：构造函数是否有原型呢？

答案是有的，但是以上的表述并不准确，正确的表达应该是：构造函数的原型对象依然存在`__proto__`去寻址它的原型对象。

原型链便是在不断的向上寻址中构建出来，所有对象的原型对象最后都是Object.prototype，而它的上层则是null，这是为了避免死循环的设计。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c631b657ca62427a8bdef1a2c145346a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

**注：这也从侧面说明了万物皆对象。**

# 继承

继承在Java中指的是类与类之间使得子类具有父类的属性和方法或者重新定义、追加属性和方法等。

然而js中并没有类这个概念，ES6增加的class也仅仅是一个语法糖，但基于原型链，js使用了另一种继承方法。

## **原型链继承**

就是让对象实例通过原型链的方式串联起来，当访问目标对象的某一属性时，能顺着原型链进行查找，从而达到类似继承的效果。

然而，原型链继承还未解决其中子类this指向问题，便有了组合继承使用call来改变子类this指向。可这依然存在问题，父类的构造函数被调用了两次（创建子类原型时调用了一次，创建子类实例时又调用了一次），导致子类原型上会存在父类实例属性，浪费内存。

## 寄生组合继承

针对组合继承存在的缺陷，又进化出了“寄生组合继承”：使用 `Object.create(Parent.prototype)` 创建一个新的原型对象赋予子类从而解决组合继承的缺陷。

寄生组合继承的模式是现在业内公认的比较可靠的 `JS` 继承模式，`ES6` 的 `class` 继承在 `babel` 转义后，底层也是使用的寄生组合继承的方式实现的。

# new操作符做了什么？

1.它首先创建了一块空对象，用于存放实例对象。

2.它将实例的原型对象指向了构造函数的原型对象。

3.它将空对象作为构造函数的上下文（即改变this指向）

4.判断实例的返回值类型，并返回实例对象。
