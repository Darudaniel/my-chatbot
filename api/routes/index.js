const chatRouter = require('./chat.router')

function routerApi(app) {
  app.use('/api/v1/chat', chatRouter)
}

module.exports = routerApi;
