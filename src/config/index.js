/** 
 * 项目整体配置文件
 */

/**
 * 项目启动端口
 */
export const port = process.env.PORT || 3001

/**
 * 接口版本（node中间层）
 */
export const version = 'v1'

/**
 * 数据源api接口
 * 完整的接口url = host + version + path
 * baseApi对象 按项目分别配置
 */
export const baseApi = {
  /**
   * 演示项目
   */
  'demo': {
    host: 'https://api.github.com',
    version: ''
  }
}

/**
 * 分配给客户端的appKey，secretKey
 * { app_key: secret_key }
 */
export const secrets = {
  '123456': 'secret'
}

/**
 * 请求过期时间（秒）
 */
export const expire = {
  enable: true,
  time: 300
}

/**
 * 不需要验证的路由（routerName列表）
 */
export const signUnless = [
  'home',
  'getApis'
]

/**
 * redis 配置
 */
// export const redisConf = {
//   port: 6379,
//   host: 'localhost',
//   option: {}
// }

/**
 * jwt 加密key
 */
// export const secret = 'jwt_secret'

/**
 * jwt 不需要token验证的接口
 */
// export const unless = [
//   /\//,
//   /\/login/
// ]