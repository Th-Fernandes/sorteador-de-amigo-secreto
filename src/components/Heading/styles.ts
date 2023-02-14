import styled from "styled-components";
import { theme } from "theme/theme";

export const StyledHeading = styled.h2`
  color: ${theme.colors.main};
  font-size: clamp(2rem, 3vw, 3.2rem);
  text-align: center;
`