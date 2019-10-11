import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import routing from './routers' // 路由
import { errorHandle, signVerify } from './middlewares' // 自定义中间件
import { port } from './config' // 全局配置
import logger from './utils/winston' // 日志工具
// import cors from '@koa/cors'
// import jwt from 'koa-jwt'

global.rootPath = __dirname

const app = new Koa()

app
  // 跨域请求
  // .use(cors())
  // 错误处理中间件
  .use(errorHandle)
  // 解析post
  .use(bodyParser({
    formLimit: '300mb'
  }))
  // 签名认证
  .use(signVerify)
  // 静态资源
  .use(serve(path.join(__dirname)))
  // jwt验证
  // .use(jwt({
  //   secret
  // }).unless({
  //   path: unless
  // }))

// 路由
routing(app)

// Start
app.listen(port, () => logger.info(`服务已启动 http://localhost:${port}/`))