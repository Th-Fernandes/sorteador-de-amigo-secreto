import styled from "styled-components";
import { theme } from "theme/theme";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 1.8rem;

  @media (min-width: ${theme.sizes.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .submit-participants-btn {
    padding: 1.6rem 2.4rem;
    border-radius: 37.5rem;
    background-color: ${theme.colors.orange};
    color: ${theme.colors.light[400]};
    width: clamp(15.5rem, 40%, 35.1rem);
    border: 1px solid #000;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: ${theme.sizes.md}px) {
      display: flex;
      align-items: center;
      gap: 2.6rem;
      font-size: 2rem
    }

    > img {
      display: none;

      @media (min-width: ${theme.sizes.md}px) {
        display: block;
      }
    }
  }
`