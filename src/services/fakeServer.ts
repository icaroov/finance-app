import { createServer, Model } from 'miragejs'

const fakeData = [
  {
    id: 1,
    title: 'Freelance de website',
    type: 'deposit',
    category: 'Dev',
    amount: 6000,
    createdAt: new Date('2021-02-12 09:00:00'),
  },
  {
    id: 2,
    title: 'Aluguel',
    type: 'withdraw',
    category: 'Casa',
    amount: 1200,
    createdAt: new Date('2021-02-14 12:00:00'),
  },
]

export function server() {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({ transactions: fakeData })
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
