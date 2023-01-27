import { atom } from "recoil";
import { ParticipantsList } from "../@types/participantsList";

export const participantsListState = atom<ParticipantsList>({
  key: 'participantsListStates',
  default: []
})