import api from '../../api/demo/feeds'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/feeds
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getFeeds = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getFeeds({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getFeeds