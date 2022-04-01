const fastify = require('fastify');
const db = require('./plugin/database');
const { tempRoute } = require('./route');

const build = (opts = {}) => {
  const app = fastify(opts);

  // Register Plugins
  app.register(db);

  // Register Routes
  app.register(tempRoute, { prefix: 'api/v1/test' });

  app.get('/', async (request, reply) => {
    reply.send({ hello: 'world!' });
  });

  return app;
};

module.exports = build;
