# 1px 适配问题

上边框和下边框解决方案


设备像素比查询
```css
@media(-webkit-min-device-pixel-ratio: 2),(min-device-device-pixel-ratio: 2){

}
```

```scss
@mixin border-top-1px($color: #EBEBEB, $position: relative) {
  position: $position;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: $color;
    transform: scaleY(0.5);
  }
}

@mixin border-bottom-1px($color: #EBEBEB, $position: relative) {
  position: $position;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: $color;
    transform: scaleY(0.5);
  }
}
```


border 解决方案

```css
.border-1px {
    border: solid #EBEBEB 0.33px;
}
```

