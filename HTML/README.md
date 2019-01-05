# 目录

1. [html 概述](#html-概述)
1. [什么是 html](#什么是-html)
1. [文档类型](#文档类型)
1. [html 基本语法](#html-基础语法)
1. [封闭式标签](#封闭式标签)
1. [开放式标签](#开放式标签)
1. [元素嵌套](#元素嵌套)
1. [html 注释](#html-的注释)
1. [根元素 html](#根元素-html)
1. [规范的网页结构](#规范的网页结构)
1. [link 标签](#link)
1. [相对路径](#相对路径)
1. [绝对路径](#绝对路径)
1. [head 标签内还能放哪些元素](#head-标签内还能放哪些元素)
1. [body 标签](#body)
1. [站点的建立](#站点的建立)

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

## 文档类型

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo00-文档类型)

文档类型

doctype 是 document type 的缩写。

html: 超文本标记语言 (HyperText Markup Language)

```html
<!DOCTYPE html>
```

以上这条语句告诉浏览器：这个文档的类型是超文本标记语言，浏览器读到这条语句以后会用超文本标记语言解析器解析接下来的html语句。

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

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo02-封闭式标签)

举例：(换行符br)

```html
<br/>
```

### 开放式标签

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo03-开放式标签)

举例:(大标题h1)

```html
<h1>
    标题
</h1>
```

## 元素嵌套

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo04-元素嵌套)

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

## html 的注释

注释： 就是用于给开发人员观看的文字，用于记录一些暂时无用的代码但将来可能会用到的，或者是一些容易忘记的内容，用于解释晦涩难懂的代码的工具。

浏览器不会去解析被注释的字符

语法：

以 <!-- 开始

以 -->  结束

```html
<!-- 注释内容 -->
```

## 根元素 html

我们的网页是由很多的元素 嵌套而成这构成了一种树形结构。

所有的结构和元素 都应该 包裹在 html 这个根元素内部。

## 规范的网页结构

首先要认识一个标签 <!DOCTYPE html> （html 5.0 的写法）

DOC：document 文档的意思

TYPE： type 类型的意思

DOCTYPE =>  文档类型

html ： 超文本标记语言

这是一种新写法

旧写法：

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

规范的网页结构举例：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>我的第一个网站</title>
    </head>
    <body>
    </body>
</html>
```

## meta

定义网页基本信息

比如 charset 规定字符集

`utf-8` 是万国码 （美国人在发明电脑的时候用的字符集是 ascii码 ascii码只能形容255种不同字符，而中文光汉子就有6万多个显然不够用。）

content 声明数据类型 （content="text/html"） html 文本

## link

link 标签是用于将外部样式表连接到html网页内的一个标签元素

他拥有 rel 和 href 2个属性

1、rel 用于声明这个文件的类型 它的值通常写成 stylesheet。

2、href 用于填写文件所在的路径 （可以写相对路径 绝对路径）

## 相对路径

相对路径就是相对当前文件 或者当前服务 所在的路径 （./ 或者 /开头）

`../` 表示上级目录。

`./` 表示同级目录。

`./img` 表示同级目录下的 img 文件夹。

`./img/pic.png` 表示同级目录 img 文件夹下的 pic.png 图片的位置。

## 绝对路径

绝对路径 可是 url 绝对路径 也可以是根目录的绝对路径

url: `https://www.baidu.com` (协议+域名+路径+文件名)

本机: `C:/doc1/file1/`

## head 标签内还能放哪些元素

1、title （网站的标题 左上角的那个）

2、link （链接外部样式表）

3、script （用于编写js的标签）

4、style （内部样式表）

5、meta （规定网页的字符集 用户是否可缩放等）

## body

就是我们的网页主体

## 建立站点

[demo](https://github.com/PsChina/HTML-CSS/tree/master/HTML/demo05-站点)

1、新建工程文件夹 myWebsite

2、新建各类资源文件夹

css - 网站样式 （存放样式(.css)文件）

html - 网站结构 （存放 .html 文件） - 是我们网站上一个一个的页面

img - 网站上的图片 （也可以取名为静态资源）

js - 网站上的行为 （用户的点击事件 滚动事件 等各种用户行为）

3、首页是如何定义的

在 html下 建立 index.html (首页)

（系统会默认打开 index.html)
