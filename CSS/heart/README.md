# 如何用 css 画一个心形 (How to draw hearts using CSS)

用两个长方形切圆角倾斜位移并合并为一个心形

## 第一步 画一个长方形 (Draw a rectangle)

```html
  <div class="setp1"></div>
```

```css
  .setp1 {
    width: 50px;
    height: 100px;
    background: red;
  }
```

## 第二步 切圆角 (Cut the rounded)


```html
  <div class="setp2"></div>
```

```css
  .setp2 {
    width: 50px;
    height: 100px;
    background: red;
    border-radius: 50% 50% 0 0
  }
```

## 第三步 倾斜 (Tilt)

```html
  <div class="setp3">
    <div class="setp2"></div>
  </div>
```

```css
  .setp2 {
    width: 50px;
    height: 100px;
    background: red;
    border-radius: 50% 50% 0 0
  }
  .setp3 {
    position: relative;
    left: 30px;
  }
  .setp3 > div {
    transform: translate(-18px,0) rotate(-45deg);
  }
```

## 第四步 合并 (Merge)

```html
  <div class="setp4">
    <div class="setp2 left"></div>
    <div class="setp2 right"></div>
  </div>
```
```css
  .setp4{
    position: relative;
    left: 30px;
    height: 120px;
  }
  .setp4 > div {
    position: absolute;
    left: 0;
  }
  .left{
    transform: translate(-18px,0) rotate(-45deg);
  }
  .right{
    transform: translate(18px,0) rotate(45deg);
  }
```


## 第五步 优化 (Optimize)

```html
  <div class="heart">
  </div>
```

```css
    .heart{
      position: relative;
      left: 30px;
    }
    .heart:after {
      border-left: 25px solid red;
      border-right: 25px solid red;
      border-top: 50px solid red;
      border-bottom: 50px solid red; 
      border-radius: 50% 50% 0 0;
      content: "";
      position: absolute;    
      top: 0;
      left: 0;
      transform: translate(-18px,0) rotate(-45deg);
    }
    .heart:before {
      border-left: 25px solid red;
      border-right: 25px solid red;
      border-top: 50px solid red;
      border-bottom: 50px solid red;
      border-radius: 50% 50% 0 0;
      content: "";
      position: absolute;    
      top: 0;
      left: 0;
      transform: translate(18px,0) rotate(45deg);
    }
```

[效果预览](https://pschina.github.io/#/css/heart)

(完)