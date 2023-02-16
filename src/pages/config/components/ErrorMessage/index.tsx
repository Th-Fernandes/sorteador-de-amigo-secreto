import { useErrorMessage } from "state/hooks/useErrorMessage";
import { StyledErrorMessage } from "./styles";

export function ErrorMessage() {
  const errorMessage = useErrorMessage();

  return (
    <>
      {errorMessage && (
        <StyledErrorMessage role="alert">{errorMessage}</StyledErrorMessage>
      )}
    </>
  );
}
