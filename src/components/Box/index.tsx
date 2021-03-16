import * as Styled from './styles'

type BoxProps = {
  children: React.ReactNode
}

const Box = ({ children }: BoxProps) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default Box
