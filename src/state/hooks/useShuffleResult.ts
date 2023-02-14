import { useRecoilValue } from "recoil";
import { shuffleResultState } from "state/atom";

export function useShuffleResult() {
  return useRecoilValue(shuffleResultState);
}