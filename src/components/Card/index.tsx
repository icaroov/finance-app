import * as Styled from './styles'

type CardProps = {
  entry: string
  money: string
  icon: string
}

const Card = ({ entry, money, icon }: CardProps) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>{entry}</Styled.Title>
        <Styled.Icon src={icon} />
      </Styled.Wrapper>
      <Styled.Money>{money}</Styled.Money>
    </Styled.Container>
  )
}

export default Card
