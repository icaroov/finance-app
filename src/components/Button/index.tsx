import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  children: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Styled.Container {...props}>
      {!!children && <span>{children}</span>}
    </Styled.Container>
  )
}

export default Button
