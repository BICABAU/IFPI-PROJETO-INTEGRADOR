const { Pool } = require ('pg')

const pool = new Pool({
    user: 'haeoefke',
    host: 'motty.db.elephantsql.com',
    database: 'haeoefke',
    password: '6sPQ1MFR_G1EDB6915cOq7k8bf5YCvIY',
    port: 5432,
  })

  module.exports = pool;