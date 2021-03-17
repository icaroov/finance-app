import * as Styled from './styles'

export type CardProps = {
  title: string
  value: number | string
  icon: string
  color?: 'green' | 'red' | 'white'
}

const Card = ({ title, value, icon, color = 'white' }: CardProps) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Icon src={icon} />
      </Styled.Header>

      <Styled.Value color={color}>{value}</Styled.Value>
    </Styled.Container>
  )
}

export default Card
