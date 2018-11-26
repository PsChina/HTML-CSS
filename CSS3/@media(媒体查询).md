## @media 

媒体查询能够使 css 在不同的设备上读取不同 css 文本。


如

```css
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue
    }
}
```

如果打开机器浏览器宽度小于等于 300 那么背景色将会是 `lightblue`


例子一个在大屏手机上正常显示的网页，在小屏手机上显示不全，需要滚动，这时一套 css 就不能满足要求，需要我们用以上技术来为小屏手机定制 css


![phone](https://github.com/PsChina/CSS/blob/master/images/phone.png)
![pc-browser](https://github.com/PsChina/CSS/blob/master/images/mac-browser.png)