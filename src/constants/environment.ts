import path from 'path'
import { config } from 'dotenv'

config({
  path: path.join(__dirname, '../../', `.env.${process.env.NODE_ENV || 'local'}`),
})

export const USERNAME = process.env.DB_USERNAME
export const PASSWORD = process.env.DB_PASSWORD
export const COLLECTION_NAME = process.env.DB_COLLECTION_NAME
