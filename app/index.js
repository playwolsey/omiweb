const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const app = new Koa();

app.use(views(path.join(__dirname, '/views'), { extension: 'nunjucks' }));

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
