import Base from '../base'

class GetFeeds extends Base {
  /**
   * https://api.github.com/feeds
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getFeeds ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/feeds'
      }
    })
  }
}

export default new GetFeeds()