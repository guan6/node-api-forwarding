import api from '../../api/demo/emojis'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/emojis
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getEmojis = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getEmojis({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getEmojis