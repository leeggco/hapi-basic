module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'hello hapi-basic'
  },
  config: {
    tags: ['api', 'users'],
    description: '测试hello',
  },
}]