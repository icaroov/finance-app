import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes

const Button = ({ children }: ButtonProps) => {
  return (
    <Styled.Container>{!!children && <span>{children}</span>}</Styled.Container>
  )
}

export default Button
