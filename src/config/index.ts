export default () => ({
  port: parseInt(process.env.APPLICATION_PORT, 10) || 3000,
  database: {
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
  },
});
