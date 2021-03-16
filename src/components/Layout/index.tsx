import Box from '../Box'
import Header from '../Header'

import * as Styled from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </Box>
  )
}

export default Layout
