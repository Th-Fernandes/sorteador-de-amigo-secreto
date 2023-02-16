import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledCard = styled.section`
  background-color: ${theme.colors.light[400]};
  margin-inline: auto;
  padding: 3.1rem 1.6rem 2rem;
  border-radius: 4.8rem 4.8rem 0 0;
  

  @media(min-width: ${theme.sizes.md}px) {
    min-height: calc(100vh - 40rem);
  }
`