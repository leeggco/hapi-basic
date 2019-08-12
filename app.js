// app.js
const Hapi = require('hapi');

const init = async () => {
  // 配置服务器启动 host 与端口
  const server = Hapi.Server({
    port: 3000,
    host: '127.0.0.1',
  });
  server.route([
    // 创建一个简单的 hello hapi 接口
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('hello hapi-basic');
      },
    },
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();