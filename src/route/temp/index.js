async function route(fastify) {
  fastify.get('/', async (request, reply) => {
    const all = await fastify.db.query('SELECT * from test_tbl');

    reply.code(200).send(all);
  });

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { title } = request.body;

    const id = await fastify.db.one(
      'INSERT INTO test_tbl(title) VALUES($1) RETURNING id',
      [title]
    );

    reply.code(201).send(id);
  });
}

module.exports = route;
