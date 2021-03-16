import * as Styled from './styles'

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Button
