### 安装 wow js

> 安装 已完成

> 引入 已完成

> 在使用的地方 初始化

```js
 initWowAnimate() {
    const wow = new WOW({
        boxClass: "wow",    //需要执行动画的元素的 class
        animateClass: "animated", // animation.css 动画的 class
        offset: 0, // 距离可视区域多少开始执行动画
        mobile: true, // 是否在移动设备上执行动画
        live: false // 异步加载的内容是否有效
    })
    wow.init()
    }
 }
```

### 安装 animate-number

> 已安装

```html
<animate-number
	ref="myNum"
	from="0"
	to="10"
	mode="manual"
	:formatter="formatter"
></animate-number
><br />
<animate-number
	:from="item.fromNumber"
	:to="item.toNumber"
	class="title-three"
	easing="linear"
	duration="7000"
></animate-number>
```

### 安装 font-awesome 字体图标库

> 已安装

### axios 已安装

### qs 已安装

### element-ui 已安装

### normalize 已安装

> NProgress.start() // 开始
> NProgress.set(0.4) // 设置进度 0-1
> NProgress.inc(); //随机增长进度条但进度条永远达到 100%
> NProgress.done() // 结束
