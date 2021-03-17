import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

type TransactionData = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>

type TransactionContextData = {
  transactions: TransactionData[]
  createTransaction(transaction: TransactionInput): Promise<void>
}

type TransactionContextProps = {
  children: React.ReactNode
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export const TransactionProvider = ({ children }: TransactionContextProps) => {
  const [transactions, setTransactions] = useState<TransactionData[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    try {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
      })

      const newTransaction = response.data.transaction

      setTransactions([...transactions, newTransaction])
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionContext)

  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider')
  }

  return context
}
