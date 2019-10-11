import Base from '../base'

class GetEvents extends Base {
  /**
   * https://api.github.com/events
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getEvents ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/events'
      }
    })
  }
}

export default new GetEvents()