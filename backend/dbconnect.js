const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'YOUR_RENDER_DATABASE_URL',
    ssl: {
        rejectUnauthorized: false // Required for Render connections
    }
});

pool.connect()
    .then(() => console.log('Connected to Render Postgres!'))
    .catch(err => console.error('Connection error', err.stack));

// Example query
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res.rows);
    pool.end();
});