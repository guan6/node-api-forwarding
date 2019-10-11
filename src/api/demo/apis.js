import Base from '../base'

class GetApis extends Base {
  /**
   * https://api.github.com/
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getApis ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/'
      }
    })
  }
}

export default new GetApis()