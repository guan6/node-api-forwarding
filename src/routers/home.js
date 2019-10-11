import Router from 'koa-router'
import { version } from '../config'

const router = new Router()

// 首页
router.get('home', '/', (ctx, next) => {
  ctx.body = `
    <h3>演示地址</h3>
    <p>使用 github api 进行测试，如返回github错误提示，代表成功。</p>
    <ul>
      <li>
        <p>不需要认证的接口</p>
        <a href="http://localhost:3001/v1/demo/getApis" target="_blank">http://localhost:3001/v1/demo/getApis</a>
      </li>
      <li>
        <p>需要签名的接口</p>
        <a href="http://localhost:3001/v1/demo/getEmails?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF" target="_blank">http://localhost:3001/v1/demo/getEmails?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF</a><br>
        <a href="http://localhost:3001/v1/demo/getEmojis?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF" target="_blank">http://localhost:3001/v1/demo/getEmojis?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF</a><br>
        <a href="http://localhost:3001/v1/demo/getEvents?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF" target="_blank">http://localhost:3001/v1/demo/getEvents?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF</a><br>
        <a href="http://localhost:3001/v1/demo/getFeeds?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF" target="_blank">http://localhost:3001/v1/demo/getFeeds?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF</a><br>
        <a href="http://localhost:3001/v1/demo/getHub?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF" target="_blank">http://localhost:3001/v1/demo/getHub?app_key=123456&req_time=1570783295439&sign=6CB1616362E2F7AC854804AAAD6312BF</a>
      </li>
    </ul>

    <p>以上需要签名的接口都将验证失败，因为接口已将过期。如不需要限制，在confing文件中，将 expire.enable 设为 false， 如需修改接口有效时间，则调整 expire.time</p>
  `
})

export default router