import Base from '../base'

class GetEmojis extends Base {
  /**
   * https://api.github.com/emojis
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getEmojis ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/emojis'
      }
    })
  }
}

export default new GetEmojis()