module.exports = {
  type: 'oracle',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  connectString:
    '(DESCRIPTION=(ADDRESS=(PROTOCOL = TCP)(HOST = ' +
    process.env.DB_HOST +
    ')(PORT = ' +
    process.env.DB_PORT +
    '))(CONNECT_DATA=(SERVICE_NAME = ' +
    process.env.DB_SERVICE_NAME +
    ')))',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
  entities: [process.env.DB_ENTITIES || ''],
  migrations: [process.env.DB_MIGRATIONS || ''],
  migrationsRun: process.env.DB_MIGRATION_RUN !== 'false',
  cli: { "migrationsDir": "src/migration/entity/" }
}