import type { ReactNode } from "react"
import styled from "styled-components"

import type { DeepReadonly } from "../../types"

const StyledButton = styled.button`
  background-color: var(--accent-color);
  color: white;

  font-weight: 700;
  font-size: 20px;

  border-radius: 1em;
  border: none;

  width: 100%;
  padding: 0.75em;
`

type AccentButtonProps = DeepReadonly<{
  children: ReactNode
}>

const AccentButton = ({ children }: AccentButtonProps) => (
  <StyledButton type="button">{children}</StyledButton>
)

export default AccentButton
