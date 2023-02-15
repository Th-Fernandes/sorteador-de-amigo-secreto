import { ReactNode } from "react";
import { StyledCustomHeading } from "./styles";

interface Props {
  children: ReactNode
}

export function CustomHeading({children}:Props) {
  return (
  <StyledCustomHeading>
    {children}
  </StyledCustomHeading>
  )
}