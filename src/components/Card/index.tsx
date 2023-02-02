import { StyledCard } from "./styles"

interface Props {
  children: React.ReactNode
}

export function Card({children}:Props) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}