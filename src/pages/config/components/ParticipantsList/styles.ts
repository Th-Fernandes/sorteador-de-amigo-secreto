import styled from "styled-components";
import { theme } from "theme/theme";

export const StyledParticipantsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  list-style: none;
  margin: 1.7rem 0;

  @media(min-width: ${theme.sizes.md}px) {
    margin: 3rem 0 1.7rem;
  }
`