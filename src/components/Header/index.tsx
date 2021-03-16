import logo from '../../assets/logo.svg'

import * as Styled from './styles'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Logo src={logo} alt="logo" />
      <Styled.Circle />
    </Styled.Container>
  )
}

export default Header
