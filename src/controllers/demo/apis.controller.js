import api from '../../api/demo/apis'
import { getRequestData } from '../../utils/utils'

/**
 * https://api.github.com/
 * @param {*} ctx - koa context
 * @param {*} next - koa next
 */
const getApis = async (ctx, next) => {
  const { requestData } = await getRequestData(ctx)

  const { body } = await api.getApis({
    ctx,
    data: requestData
  })
  ctx.body = body
}

export default getApis