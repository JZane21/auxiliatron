const  mysqlConfig = {
  development: {
    client: 'mysql',
    connection: {
      // TODO jalar desde el local enviorment
      host: 'localhost',
      user: 'root',
      passsword: 'root',
      database: 'auxiliatron'
    }
  }
};

module.exports = mysqlConfig;