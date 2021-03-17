import { createServer, Model } from 'miragejs'

export function server() {
  createServer({
    models: {
      transaction: Model,
    },

    routes() {
      this.namespace = 'api'
      this.get('/transactions', () => this.schema.all('transaction'))

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
    },
  })
}
