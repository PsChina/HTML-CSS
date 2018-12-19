# 如何用 css 画一个心形 (How to draw hearts using CSS)

用两个长方形切圆角倾斜位移并合并为一个心形

## 第一步 画一个长方形 (Draw a rectangle)

这个长方形就是爱心的一半

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

切个圆角使得它更加像爱心

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

倾斜一下完成爱心的一半

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

另一半如法炮制合并成一个爱心

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

我们发现一个爱心用了 __3__ 个 `div` 冗余结构太多了让我们优化一下。

用伪类代替冗余结构。

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