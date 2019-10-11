export const getRequestData = async ctx => {
  return {
    requestData: ctx.request.method === 'GET' ? ctx.query : ctx.request.body
  }
}
