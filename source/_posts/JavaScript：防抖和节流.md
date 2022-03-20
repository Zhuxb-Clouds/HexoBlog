---
title: JavaScript：防抖和节流
copyright: false
date: 2022-03-11 06:31:57
tags: JavaScript
cover: "https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203110633288.webp"
categories:
  - [技术,JavaScript]
---

# 防抖和节流解决的问题

举一个例子，如果有一个按钮，效果是向后端请求数据。用户不断点击，难道要向不断向后端请求数据吗？

不论后端的压力，单论必要性都是要打问号的。防抖和节流就是为了解决这个问题的：短时间的重复请求。

# 防抖（debounce）

防抖就是：**当一个函数连续触发，只执行最后一次。**

当连续的事件却只需要触发一次的情况下，我们会使用防抖，具体实现的原理类似于设置一个定时器，当再次触发的时候清除前一个定时器，只有在一定时间内没有再次触发事件才会执行。

## 代码实现

```
function debounce(fn, delay) {
  // timer是一个定时器
  let timer = null;
  // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
  return function () {
    // 调用一次就清除上一次的定时器
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay)
  }
```

# 节流（throttle）

节流就是：**当一个函数被触发，经过一定时间才执行下一个。**

有一次我将节流和防抖记混了，就这么和别人说的：在容器里放一个定时器，当函数执行的之前先看看这个容器里有没有定时器，如果有就不执行函数，直到定时器触发完。

## 代码实现

```
function throttle(fn, delay) {
  // 重置定时器
  let timer = null;
  // 返回闭包函数
  return function () {
    // 记录事件参数
    let args = arguments;
    // 如果定时器为空
    if (!timer) {
      // 开启定时器
      timer = setTimeout(() => {
        // 执行函数
        fn.apply(this, args);
        // 函数执行完毕后重置定时器
        timer = null;
      }, delay);
    }
  }
}
```

代码这里实现的方式其实分成首节流和尾节流，一个是利用时间戳在函数头设置节流器，另一个便是上面写的这个。
