if (!process.env.POSTGRES_URI) {
  process.env.POSTGRES_URI = 'postgres://app:pas_world@localhost:5432/db';
}
