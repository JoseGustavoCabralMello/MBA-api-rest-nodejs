import { FastifyInstance } from 'fastify'
import { kenx } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const tables = kenx('sqlite_schema').select('*')

    return tables
  })
}
