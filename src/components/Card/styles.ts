import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledCard = styled.section`
  background-color: ${theme.colors.light[400]};
  max-width: ${theme.sizes.lg}px;
  margin-inline: auto;
  position: relative;
  bottom: 3.1rem;
  padding: 3.1rem 1.6rem 2rem;
  border-radius: 4.8rem 4.8rem 0 0;
`