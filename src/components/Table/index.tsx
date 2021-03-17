import { format } from '../../utils/helperFunctions'
import { useTransaction } from '../../hooks/useTransactions'

import * as Styled from './styles'

const Table = () => {
  const { transactions } = useTransaction()

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
