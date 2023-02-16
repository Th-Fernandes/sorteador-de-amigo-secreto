import { useErrorMessage } from "state/hooks/useErrorMessage"

export function ErrorMessage() {
  const errorMessage = useErrorMessage();
  
  return (
    <>
      {
        errorMessage && <p role="alert">{errorMessage}</p>
      }
    </>
  )
}