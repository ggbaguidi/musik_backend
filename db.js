import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const Pool = pg.Pool

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

// const pool = new Pool({
// 	database: 'postgres',
// 	host: 'localhost',
// 	port: 5432,
// 	user: 'postgres',
// 	password: 'ansh00',
// })

export default pool
