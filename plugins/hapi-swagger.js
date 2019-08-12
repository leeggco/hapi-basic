// plugins/hapi-swagger.js
const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    // v17之后register改成了plugin
    // register: hapiSwagger,
    plugin: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version,
      },
      // 定义接口以 tags 属性定义为分组
      grouping: 'tags',
      tags: [{
        name: 'users',
        description: '用户相关'
      }, ]
    }
  }
]