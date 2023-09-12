require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      host: "dpg-cjefukunk9qs73aftnh0-a.oregon-postgres.render.com",
      user: "auxiliatron_db_user",
      name: 'auxiliatron-db',
      password: "bwpU9dBVyaMkHrd1kX7O2MRkIIieuAmm",
      database: "auxiliatron_db",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
