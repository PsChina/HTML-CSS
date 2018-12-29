# @media

媒体查询能够使`浏览器`根据不同尺寸的设备读取不同 css 文本。

如

```css
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue
    }
}
```

如果打开机器浏览器宽度小于等于 300 那么背景色将会是 `lightblue`

## 例子：

一个在大屏手机上正常显示的网页，在小屏手机上显示不全，需要滚动，这时一套 css 就不能满足要求，需要我们用以上技术来为小屏手机定制 css

大屏手机:

![pc-browser](https://github.com/PsChina/CSS/blob/master/images/mac-browser.png)

小屏手机:

如 iPhoneSE

![phone](https://github.com/PsChina/CSS/blob/master/images/phone.png)

这时我们需要用媒体查询来修复这个问题让他在小屏手机上能正常工作

```css
@media screen and (max-width: 321px) {
    .small-media{
        height: 140px;
        overflow-y: scroll;
    }
}
```

在动态生成的页面加上类名 `small-media`

```js
var productB = '\
<div class="small-media">\
<div class="butler_account_munber sub_div_mt10"> 账套数: <div index="0" userCount="10">10用户50账套</div> <div index="1" userCount="50">50用户100账套</div> <div index="2" userCount="200">200用户200账套</div> <div index="3" userCount="500">500用户500账套</div> <div index="4" userCount="1000">1000用户1000账套</div> <div index="5" userCount="2000">2000用户2000账套</div> <div index="6" userCount="3000">3000用户3000账套</div> <div index="7" userCount="4000">4000用户4000账套</div> <div index="8" userCount="5000">5000用户5000账套</div> </div>\
<div class="butler_period_validity"> 有效期: <div>1年</div> <div>2年</div> <div>3年</div> <div>4年</div> <div>5年</div></div>\
<div class="butler_count"> 数量: <div>1</div></div>\
</div>\
'
```

这样一来在小屏手机上就能滚动

效果:

![fix-image](https://github.com/PsChina/CSS/blob/master/images/fix-image.jpg)