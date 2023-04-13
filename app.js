const koa = require('koa');
const server = new koa();
const static = require('koa-static');
const Router = require('koa-router');
const route = new Router();

route.get ('/',(ctx,next) => ctx.body='inicia acceso al servidor')

server.use(static('./public'));
server.use(route.routes())

server.listen (3003,'localhost',() => console.log('Se activa la escucha del puerto 3003'));

