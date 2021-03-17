import { useModal } from '../../hooks/useModal'
import { useTransaction } from '../../hooks/useTransactions'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import Card from '../Card'
import Button from '../Button'
import Table from '../Table'
import { format } from '../../utils/helperFunctions'

import * as Styled from './styles'

const Dashboard = () => {
  const { handleOpenModal } = useModal()
  const { transactions } = useTransaction()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <Styled.Container>
      <Styled.CardWrapper>
        <Card
          title='Entradas'
          icon={income}
          value={format.currency(summary.deposits)}
          color='green'
        />
        <Card
          title='Saídas'
          icon={outcome}
          value={`- ${format.currency(summary.withdraws)}`}
          color='red'
        />
        <Card
          title='Total'
          icon={total}
          value={format.currency(summary.total)}
        />
      </Styled.CardWrapper>

      <Table />

      <Styled.ButtonSection>
        <Button onClick={handleOpenModal}>+</Button>
      </Styled.ButtonSection>
    </Styled.Container>
  )
}

export default Dashboard
