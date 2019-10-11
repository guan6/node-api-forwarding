import api from '../../api/demo/emails'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/user/emails
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getEmails = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getEmails({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getEmails