import Base from '../base'

class GetHub extends Base {
  /**
   * https://api.github.com/hub
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getHub ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/hub'
      }
    })
  }
}

export default new GetHub()