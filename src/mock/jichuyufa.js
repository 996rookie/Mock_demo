import Mock from "mockjs";
// 生成文本
// const data = Mock.mock({
//   'string|1-4': '哎呦!'
// })
// const data = Mock.mock({
//   string: '@cword(3, 10)'
// })

// 生成标题和句子
// const data = Mock.mock({
//   title: '@ctitle(5, 10)',
//   sentence: '@csentence(5, 50)'
// })

// 生成段落
// const data = Mock.mock({
//   content: '@cparagraph(5)'
// })

// 生成数值
// const data = Mock.mock({
//   'number|1-100': 10
// })

// 生成增量id
// const data = Mock.mock({
//   id: '@increment(1)'
// })

// 生成名字、身份证号、地址
// const data = Mock.mock({
//   name: '@cname()',
//   idCart: '@id()',
//   address: '@city(true)'
// })

// 生成图片
// const data = Mock.mock({
//   img_url: "@image('250 x 250', '#FFA07A', '#FFBBFF', 'png', '坤坤')"
// })

// 生成时间
// const data = Mock.mock({
//   date: '@date(yyyy-MM-dd hh:mm:ss)'
// })

// 生成数组
// const data = Mock.mock({
//   "newsList|8-20": [
//     {
//       name: "@cname()",
//       address: "@city(true)",
//       id: "@increment(1)",
//     },
//   ],
// });
// console.log(data);

// 定义get请求
Mock.mock("/api/news", "get", {
  status: 200,
  msg: "获取数据成功",
});

// 定义拦截post请求
// Mock.mock("/api/post/news", "post", {
//   status: 200,
//   msg: "post成功",
// });
Mock.mock("/api/post/news", "post", () => {
  return {
    status: 200,
    msg: "post成功",
  };
});
