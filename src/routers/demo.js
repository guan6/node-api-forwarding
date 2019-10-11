import Router from 'koa-router'
import { version } from '../config'
// 所有pairuidapan相关控制器中间件
import * as control from '../controllers/demo'

const router = new Router({
  prefix: `/${version}`
})

router.get('getApis', '/demo/getApis', control.getApis)

router.get('getEmails', '/demo/getEmails', control.getEmails)

router.get('getEmojis', '/demo/getEmojis', control.getEmojis)

router.get('getEvents', '/demo/getEvents', control.getEvents)

router.get('getFeeds', '/demo/getFeeds', control.getFeeds)

router.get('getHub', '/demo/getHub', control.getHub)

export default router