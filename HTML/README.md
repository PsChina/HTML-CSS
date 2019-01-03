# 目录

1. [html 概述](#html-概述)
1. [什么是 html](#什么是-html)
1. [html 基本语法](#html-基础语法)
1. [封闭式标签](#封闭式标签)
1. [开放式标签](#开放式标签)
1. [元素嵌套](#元素嵌套)

## html 概述

html 全称: HyperText Markup Language

中文: __超文本标记语言__。

超文本文件是 Web 的基本组成单元，也称为网页或 HTML 文档、Web 等，通常以 `.html` 或 `.htm` 为后缀的文件。

Web页之间通过超文本中的超链接组织在一起。

## 什么是 html

HTML：超文本标记语言，一种纯文本类型的语言。

-- __使用带有尖括号的“标记”将网页中的内容逐一标识出来__ 。

是用来设计网页的标记语言。

用该语言编译的文件，以.html或者.htm为后缀。

由浏览器解析执行。

HTML页面上，可以嵌套用脚本语言编写的程序段，如：JavaScript。

## html 基础语法

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo01-%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95)

用尖角号括起来的 标签名

举例：（段落元素p）

```html
<p>
    假设有很多文字.....
</p>
```

![p](https://github.com/PsChina/CSS/blob/master/images/p.jpeg)

## 两种类型的标签

### 封闭式标签

举例：(换行符br)

```html
<br/>
```

### 开放式标签

举例:(大标题h1)

```html
<h1>
    标题
</h1>
```

## 元素嵌套

举例：div的嵌套

```html
<div>
    <div>
        <h1>头版头条</h1>
        <p>正文........</p>
    </div>
    <div>
        <h2>次级标题</h2>
        <p>段落正文</p>
    </div>
</div>
```