import dotenv from 'dotenv'

dotenv.config()

const config = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DEV_DIALECT,
    operatorsAliases: false,
    logging: false
  },
  test: {
    dialect: process.env.TEST_DIALECT,
    host: process.env.TEST_HOST,
    database: process.env.TEST_DATABASE,
    password: process.env.TEST_PASSWORD,
    username: process.env.TEST_USER
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: process.env.PROD_DIALECT
  }
}

export default config
