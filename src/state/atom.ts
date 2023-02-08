import { shuffleResult } from "../@types/shuffleResult";
import { atom } from "recoil";
import { ParticipantsList } from "../@types/participantsList";

export const participantsListState = atom<ParticipantsList>({
  key: 'participantsListStates',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})

export const shuffleResultState = atom<shuffleResult>({
  key: 'shuffleResultState',
  default: new Map()
})