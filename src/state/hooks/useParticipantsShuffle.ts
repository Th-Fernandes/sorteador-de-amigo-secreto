import shuffle from "just-shuffle";
import { useRecoilState } from "recoil";
import { shuffleResultState } from "state/atom";
import { useParticipantsList } from "./useParticipantsList";

export function useParticipantsShuffle() {
  const participantsList = useParticipantsList();
  const [shuffleResult, setShuffleResult ] = useRecoilState(shuffleResultState)

  return function () {
    const participantsQuantity = participantsList.length;
    const shuffledParticipantsList = shuffle(participantsList);

    for (let index = 0; index < participantsQuantity; index++) {
      const lastParticipantIndex = participantsQuantity - 1;
      const shuffleIndex = index === lastParticipantIndex ? 0 : index + 1;

      shuffleResult.set(
        shuffledParticipantsList[index],
        shuffledParticipantsList[shuffleIndex]
      );
    }
    setShuffleResult(shuffleResult);
  };
}
