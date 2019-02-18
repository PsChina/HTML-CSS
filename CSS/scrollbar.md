# scrollbar

css 中有一个伪元素`::-webkit-scrollbar`是用于控制整个网页任意位置的 scrollbar （滚动条)的。

例如隐藏滚动条:

```css
::-webkit-scrollbar {
    display: none;
}
```

当滚动条被隐藏以后就算使用

```css
.scroll-ele {
    max-height:800px;
    overflow-y:scroll;
}
```

也不能使得滚动条出现，即会出现当内容高度超过800px时页面能滚动但是，看不到滚动条的状况。

显示滚动条:

```css
::-webkit-scrollbar {
    display: block
}
```