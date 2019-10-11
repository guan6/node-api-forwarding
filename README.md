# 使用

node 版本要求

node >= v8.0.0

开发环境 node v8.12.0

## 启动

```bash
# 本地开发
# 开发环境需要全局安装nodemon
npm run dev

# 转码ES5(上线前需要执行)
npm run build

# 生产测试环境启动项目，需要全局安装pm2

#pm2 方式
pm2 start ./pm2/dev.config.js # dev
pm2 start ./pm2/prod.config.js # prod

pm2 reload ./pm2/dev.config.js # dev
pm2 reload ./pm2/prod.config.js # prod

pm2 stop ./pm2/dev.config.js # dev
pm2 stop ./pm2/prod.config.js # prod
```

## 项目结构

- `src` 开发目录
  - `qpi` 对接后端接口，封装请求。
  - `controllers` 中间层业务逻辑，获取路由参数，调用api获取后端接口数据，转发数据。
  - `routers` 路由，定义中间层对外的接口地址
  - `middlewares` 自定义的其他中间件
  - `config` 项目配置文件
  - `utils` 工具
- `pm2` pm2配置文件
- `logs` 日志目录
- `server` build后用于生产的目录

## 配置 /config

- `secrets` 秘钥对；
- `expire` 接口有效期配置（关闭、开启、过期时间）；
- `signUnless` 配置无需签名验证的API；

其他配置见confing文件

## 请求接口需携带参数

```javascript
$ajax({
  url: 'path',
  methods: 'GET/POST...',
  data:{
    app_key: '123456', // 统一分配
    sign: '175A43C14AC5E6A1C94E59C96F491D8A', //见sign生成规则
    req_time: 1539574913156, //毫秒（请求发起时间, 不约束有效期时非必传）
    //...
  }
})
```

## sign生成规则

前后端使用相同规则生成sign，验证sign一致性。

假如对如下请求加密
`http://localhost:3001/v1/login/?code=utf-8&q=女`

> app_key 及 secret_key 由后端提供

1. 将请求参数按字典顺序升序排列（包含`app_key`），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA
    - stringA="app_key=keyValue&c=utf-8&q=女"
2. 拼接密钥`secret_key`
    - stringSignTemp="app_key=appKey&c=utf-8&q=女&secret_key=secretKey"
3. MD5并转换为大写
    - sign=MD5(stringSignTemp).toUpperCase()
4. 如果后端开启接口有效期验证，则需要添加`req_time`参数，值为请求发起时间（毫秒）.
    - 注： req_time 不参与加密
    - req_time = new Date() * 1
5. 最终请求
    - `http://localhost:3001/v1/login/?code=utf-8&q=女&sign=sign&app_key=app_key&req_time=req_time`
