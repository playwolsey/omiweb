const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const app = new Koa();

app.use(views(__dirname, { map: {html: 'nunjucks' }}));

app.use(async function (ctx) {
  await ctx.render('./views/index.html')
});

app.listen(3000, () => {
  console.log('koa server running on http://localhost:3000');
});
