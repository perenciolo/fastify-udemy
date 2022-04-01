const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', async (request, reply) => {
    reply.send({ hello: 'PUTA!' });
  });

  return app;
};

module.exports = build;
