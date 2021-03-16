import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import Card from '../Card'
import Table from '../Table'

import * as Styled from './styles'

const Dashboard = () => {
  return (
    <Styled.Container>
      <Styled.CardWrapper>
        <Card
          title='Entradas'
          icon={income}
          value='R$ 17.400,00'
          color='green'
        />
        <Card title='Saídas' icon={outcome} value='- R$ 1.259,00' color='red' />
        <Card title='Total' icon={total} value='R$ 16.141,00' />
      </Styled.CardWrapper>

      <Table />
    </Styled.Container>
  )
}

export default Dashboard
