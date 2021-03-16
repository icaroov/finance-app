import Header from '../Header'

import * as Styled from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Container>
      <Header />
      <main>{children}</main>
    </Styled.Container>
  )
}

export default Layout
