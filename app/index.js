const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const app = new Koa();

app.use(views(__dirname, { map: {html: 'nunjucks' }}));

app.use(async function (ctx) {
  await ctx.render('./views/index.html')
});

app.use(async function pageNotFound(ctx) {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  ctx.status = 404;

  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      ctx.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      ctx.type = 'text';
      ctx.body = 'Page Not Found';
  }
});

app.listen(3000, () => {
  console.log('koa server running on http://localhost:3000');
});
