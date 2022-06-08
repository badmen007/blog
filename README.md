## 注意事项

- 使用Link标签包裹a标签的时候，className 要写在a标签上 不要写在Link上

```css
.blob {
  height: 150px;
  width: 150px;
  border-radius: 58% 43% 33% 64% / 50% 38% 53% 50%;
  background: transparent;
  box-shadow: inset 6px 33px 20px 0 #c9c9c9, inset 20px 80px 15px 0 #e0e0e0, 10px 20px 20px 0px #c9c9c9;
}

.bg{
  background: #e0e0e0;
}

.blob::before {
  content: '';
  position: absolute;
  border-radius: 37% 54% 46% 46%;
  background: white;
  width: 50px;
  transform: rotate(-30deg);
  height: 15px;
  top: 20px;
  left: 20px;
}

.blob::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: white;
  width:10px;
  height: 10px;
  top: 60px;
  left: 20px;
}
```

```html
<div className={utilStyles.bg}>
  <div className={utilStyles.center}>
    <div className={utilStyles.blob}></div>
  </div>
</div>
```


## Pre-rendering

-  默认情况下，Next.js会预先渲染每个页面。这意味着Next.js会提前为每个页面生成HTML，而不是由客户端的JavaScript完成。预渲染可以带来更好的性能和SEO。

每个生成的HTML都与该页面所需的最小JavaScript代码相关联。当一个页面被浏览器加载时，它的JavaScript代码就会运行，并使该页面完全互动。(这个过程被称为水化）。

你应该看到，你的应用程序在没有JavaScript的情况下被渲染。这是因为Next.js已经将应用程序预先渲染成静态HTML，使你可以在不运行JavaScript的情况下看到应用程序的用户界面。

- Next.js有两种形式的预渲染。静态生成和服务器端渲染。区别在于它何时为一个页面生成HTML。
  - **静态生成** 是一种预渲染方法，在构建时生成HTML。预渲染的HTML然后在每个请求中被重复使用。
  - **服务器端渲染** 是预渲染方法，在每个请求中生成HTML。


- 什么时候用静态生成什么时候用服务端渲染
  就是说 我能能够判断这个html能够在请求之前渲染出来 那就用静态生成  否则就用服务端渲染

- Static Generation with Data using getStaticProps 使用getStaticProps进行数据的静态生成
- getStaticProps在生产中的构建时间运行
- 在getStaticProps中，你可以获取外部数据并将其作为道具发送到页面。

```js
export async function getStaticProps() {
  const data = ...

  return {
    props:  ...
  }
}

```

>  在开发模式下，getStaticProps会在每个请求中运行。

## 动态路由
- 如何使用getStaticPaths静态地生成具有动态路线的页面。
- 如何编写getStaticProps来获取每篇博客文章的数据。
- 如何使用 remark 渲染markdown。
- 如何漂亮地打印日期字符串。
- 如何用动态路径链接到一个页面。
- 关于动态路由的一些有用信息。



## 怎么再next中用ts
