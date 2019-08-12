// app.js
// require 一定要放在前面
require('env2')('./.env');
const Hapi = require('hapi');
const config = require('./config');
const routesHello = require('./routes/hello');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const init = async () => {
  // 配置服务器启动 host 与端口
  const server = Hapi.Server({
    port: config.port,
    host: config.host,
  });
  // 注册插件
  await server.register([
    ...pluginHapiSwagger,
  ]);
  // 配置路由
  server.route([
    ...routesHello,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();