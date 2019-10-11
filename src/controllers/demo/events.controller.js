import api from '../../api/demo/events'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/events
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getEvents = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getEvents({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getEvents