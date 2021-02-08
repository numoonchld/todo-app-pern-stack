const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'password',
    host: 'postgres_db', // has to be docker compose db service name
    port: 5432,
    database: 'perntodo',
})

module.exports = pool