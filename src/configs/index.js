import dotenv from 'dotenv'

dotenv.config()

const config = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DEV_DIALECT,
    operatorsAliases: false
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.TEST_DIALECT,
    host: 'babar.elephantsql.com',
    database: 'ikhtwtns',
    password: 'YulrRTsbCC8KD8LbmbaqYwXibWoJtcL7',
    username: 'ikhtwtns'
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: process.env.PROD_DIALECT
  }
}

export default config
