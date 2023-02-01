import { useRecoilValue } from "recoil";
import { errorState } from "../atom";

export function useErrorMessage() {
  const errorMessage = useRecoilValue(errorState);
  return errorMessage;
}