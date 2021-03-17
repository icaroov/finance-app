import { useEffect, useState } from 'react'

import api from '../../services/api'
import { format } from '../../utils/helperFunctions'
import * as Styled from './styles'

type TransactionData = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

const Table = () => {
  const [transactions, setTransactions] = useState<TransactionData[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.TableHead>Título</Styled.TableHead>
            <Styled.TableHead>Valor</Styled.TableHead>
            <Styled.TableHead>Categoria</Styled.TableHead>
            <Styled.TableHead>Data</Styled.TableHead>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <Styled.TableRow key={transaction.id}>
              <Styled.TableData>{transaction.title}</Styled.TableData>
              <Styled.TableData className={transaction.type}>
                {format.currency(transaction.amount)}
              </Styled.TableData>
              <Styled.TableData>{transaction.category}</Styled.TableData>
              <Styled.TableData>
                {format.date(transaction.createdAt)}
              </Styled.TableData>
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  )
}

export default Table
