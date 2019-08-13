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
}, {
  method: 'GET',
  path: '/hello',
  handler: (request, h) => {
    return h.file('./views/hello.html')
  }
}, {
  method: 'GET',
  path: '/epub',
  handler: (request, h) => {
    return h.file('./views/epub.html')
  }
}]