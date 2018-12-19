import Koa from 'koa'
import route from 'koa-route'
import Router from 'koa-router'
import mysql from 'mysql'
import md5 from 'md5'

console.log(md5('admin'))

let app = new Koa()
let main = (ctx) => {
	ctx.response.body = "<h1>Hello World!</h1>"
}
app.use(route.get('/', main))

app.listen(3000, () => console.log('server is running at http://localhost:3000'))