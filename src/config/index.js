function getEnv(envName) {
  if (!process.env[envName]) {
    throw new Error(`ENV Variable: ${envName} is not defined`);
  }

  return process.env[envName];
}

module.exports = {
  database_uri: getEnv('POSTGRES_URI'),
};
