# js-utils

## 节流函数-throttle

前端很多场景，如重新调整浏览器窗口大小调用window.resize，浏览器页面滚动window.onscroll，鼠标移动 mousemove等， 监听过程会大量
频繁的触发监听函数执行。大量触发导致页面性能收到很大影响，这个时候需要用到节流函数，把触发频率降低到合理范围。

常用的基础写法如下：

```
    function throttle(method, context) {
        clearTimeout(method.tId)
        method.tId = setTimeout(function () {
            method.call(context)
        }, 1000)
    }
```