/**
 * api 处理基础类
 * promisify: return promise (node >= 8)
 * request: nodejs http
 */
import 'babel-polyfill'
import { promisify } from 'util'
import request from 'request'
import { baseApi } from '../config'
import logger from '../utils/winston'

/**
 * promise 封装 request
 * request.defaults: request 全局默认配置
 */
const requestPromise = promisify(request.defaults({
  json: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})) 

export default class Base {

  /**
   * http请求方法
   * options 为request模块配置，支持全部配置项
   * https://github.com/request/request#requestoptions-callback
   * 
   * 其他为扩展参数，实现内部逻辑
   * 请求数据请不要使用option.options配置, 因为request根据contentType不同，请求方式不同，使用多个不同参数配置。
   * 为方便使用，Base类使用option.data封装请求参数，转换到request模块配置中。
   * 
   * @param {Object} option - 请求参数
   * @param {Object} option.ctx - koa context
   * @param {Object} option.options - request模块配置
   * @param {String} [option.project] - 回源接口所属项目
   * @param {String} [option.data] - request 数据
   * @param {String} [option.needAuth] - 源接口是否需要认证？默认需要
   * 
   */
  async http({ ctx, options, project = 'demo', data, needAuth = false }) {

    /**
     * headers 设置
     */
    options.headers = options.headers || {}
    options.headers['Content-Type'] = options.headers['Content-Type'] || ctx.request.type

    /**
     * 设置request请求方式，而不是从node层路由继承
     */
    options.method = options.method ? options.method : ctx.method

    /**
     * 源api接口地址完整前缀
     * 地址构成： api地址+api版本
     * 如传递了baseUrl，则忽略配置
     */
    options.baseUrl = options.baseUrl || `${baseApi[project].host}/${baseApi[project].version}`

    /**
     * 如果接口需要认证，添加auth配置，认证方式bearerToken
     */
    if (needAuth){
      let token = ctx.request.headers.authorization || ctx.cookies.get('Authorization') || ctx.request.query.token
      options.auth = {
        bearer: token.split(/(%20)| /).pop()
      }
    }

    /**
     * 根据源接口要求，使用不同配置项传递参数
     */
    if (options.method === 'POST') {
      switch (ctx.request.type){
        case 'application/x-www-form-urlencoded':
          options.form = data
          break
        case 'application/json':
          options.body = data
          break
        case 'multipart/form-data':
          options.formData = data
          break
        default:
          break
      }
    }

    if (options.method === 'GET') {
      options.qs = data
    }

    /**
     * 输出debug日志
     */
    console.log(JSON.stringify(options))

    logger.debug(JSON.stringify(options))

    /**
     * return request promise
     */
    return requestPromise(options)
  }

  /**
   * 合并多个源接口
   * @param {Object} option - 
   */
  async mergeHttp({ paths }) {
    // 请求合并
    // Promise.all
  }
}