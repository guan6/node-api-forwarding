import Base from '../base'

class GetEmails extends Base {
  /**
   * https://api.github.com/user/emails
   * @param {Object} option 
   * @param {Object} option.ctx - koa context
   * @param {Object} option.data - 请求参数
   */
  getEmails ({ ctx, data = {} }) {
    return this.http({
      ctx,
      data,
      options: {
        url: '/user/emails'
      }
    })
  }
}

export default new GetEmails()