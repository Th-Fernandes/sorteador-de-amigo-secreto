import styled from "styled-components";
import { theme } from "theme/theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 47.5rem;
  margin-inline: auto;

  > span {
    font-size: 2rem;
    text-align: center;
    margin: 3.2rem 0 2.4rem;
  }
`

export const StyledSelect = styled.select`
  display: block;
  width: min(100%, 47.6rem);
  margin-top: 3.4rem;
  border-radius: 3.2rem;
  padding-block: 2.5rem;
`
export const StyledSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: clamp(15.5rem, 5vw, 22.7rem );
  padding-block: 2rem;
  border: none;
  border-radius: 3.2rem;
  background-color: ${theme.colors.orange};
  color: ${theme.colors.light[400]};
  cursor: pointer;
`