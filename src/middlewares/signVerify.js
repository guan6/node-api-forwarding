/**
 * 签名验证
 */
import 'babel-polyfill'
import crypto from 'crypto'
import { secrets, expire, signUnless } from '../config'
import { getRequestData } from '../utils/utils'
import logger from '../utils/winston'

export default async(ctx, next) => {
  return next().then(async () => {
    /**
     * 如果路由在signUnless中，则跳过验证
     */
    if (signUnless.indexOf(ctx._matchedRouteName) >= 0) return

    const
      /**
       * 获取请求数据
       */
      { requestData } = await getRequestData(ctx),
      params = requestData,
      keys = Object.keys(params)

    let stringSignTemp = ''

    // 参数名按字典排序
    keys.sort()

    // 拼接参数
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (key === 'sign' || key === 'req_time') continue
      stringSignTemp += `${key}=${params[key]}&`
    }
    stringSignTemp += `secret_key=${secrets[params.app_key]}`

    const resultCode = crypto.createHash('md5').update(stringSignTemp).digest('hex').toUpperCase()

    // debug信息
    logger.debug(`Sign验证: ${resultCode}, ${params.sign}`)

    /**
     * 验证成功放行，否则抛出401
     */
    const
      now = new Date() * 1,
      expireTime = expire.time * 1000,
      requestTime = params.req_time

    if (params.sign === resultCode) {
      if (expire.enable) {
        if (!requestTime || now - requestTime > expireTime) {
          ctx.throw(401)
        }
      }
    } else {
      ctx.throw(401)
    }
  })
}