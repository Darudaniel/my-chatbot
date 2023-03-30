const chatRouter = require('./chat.router')

function routerApi(app) {
  app.use('/chat', chatRouter)
}

module.exports = routerApi;
