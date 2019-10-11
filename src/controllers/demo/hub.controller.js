import api from '../../api/demo/hub'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/hub
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getHub = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getHub({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getHub