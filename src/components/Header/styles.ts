import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledHeader = styled.header`
  background-color: ${theme.colors.main};

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${theme.sizes.md}px;
    padding-top: 3.1rem;
    

    @media (min-width: ${theme.sizes.md + 'px'}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 12.3rem;
      margin-inline: auto;
    }
  }

  img {
    max-width: 100%;
    position: relative;
    z-index: 999;
  }
`;
