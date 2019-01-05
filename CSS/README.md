
# css

css 是层叠样式表 （Cascading Style Sheets）

css 是网页三要素中的 样式 用于规定网页的外观表现。

## 目录

1. [语法规范](#语法规范)
1. [css的几种存在形式](#css-的几种形式)

## 语法规范

以左花括号好开始 `{`

以右花括号结束 `}`

语法 `属性:属性值;` 例如  `color:red;`

属性和属性值之间用 `:` 隔开

语句和语句之间用 `;` 隔开

```css
/* 给 p 元素 加上红色的文字颜色 并且将背景颜色设置为橙色 */
p {
    color:red;
    background-color:orange
}
```

## css 的几种形式

### 1、内部样式表

在 html 内 以 `<style></style>` 标签的形式存在。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>我的第一个网站</title>
        <link rel="stylesheet" href="">
        <style>
            div {
                color: red;
            }
        </style>
    </head>
    <body>
        <div>Hello World</div>
    </body>
</html>
```

### 2、外部样式表

以 `.css` 后缀名的文件形式存在 (link标签将它导入到html文件内 在head内)

### 3、内联样式

存在于元素内

```html
<p style="color:red">文本1</p>
<p>文本2</p>
```
