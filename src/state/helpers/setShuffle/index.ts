import { ParticipantsList } from "../../../@types/participantsList";
import shuffle from "just-shuffle";

export function setShuffle(participantsList: ParticipantsList) {
  const participantsQuantity = participantsList.length;
  const shuffledParticipantsList = shuffle(participantsList);
  const shuffleResult = new Map<string, string>();

  for (let index = 0; index < participantsQuantity; index++) {
    const lastParticipantIndex = participantsQuantity - 1;
    const shuffleIndex = index === lastParticipantIndex ? 0 : index + 1;

    shuffleResult.set(
      shuffledParticipantsList[index],
      shuffledParticipantsList[shuffleIndex]
    );
  }

  return shuffleResult
}