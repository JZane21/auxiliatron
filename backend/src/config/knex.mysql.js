const  mysqlConfig = {
  development: {
    client: 'mysql',
    connection: {
      // TODO jalar desde el local enviorment
      host: 'localhost',
      user: 'auxiliatron_db_user',
      password: 'bwpU9dBVyaMkHrd1kX7O2MRkIIieuAmm',
      database: 'auxiliatron_db'
    }
  }
};

module.exports = mysqlConfig;