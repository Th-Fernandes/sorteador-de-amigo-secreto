import { StyledHeading } from "./styles";

interface Props {
  children: string;
}

export function Heading({children}:Props) {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
}