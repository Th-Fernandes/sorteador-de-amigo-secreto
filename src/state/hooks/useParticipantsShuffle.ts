import { useRecoilState } from "recoil";
import { shuffleResultState } from "state/atom";
import { setShuffle } from "state/helpers/setShuffle";
import { useParticipantsList } from "./useParticipantsList";

export function useParticipantsShuffle() {
  const participantsList = useParticipantsList();
  const [shuffleResult, setShuffleResult ] = useRecoilState(shuffleResultState)

  return function () {
    const result = setShuffle(participantsList);
    setShuffleResult(result);
  }
}
