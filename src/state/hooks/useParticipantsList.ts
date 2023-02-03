import { useRecoilValue } from "recoil"
import {participantsListState} from "../atom"

export function useParticipantsList() {
  const participantsList = useRecoilValue(participantsListState);
  return participantsList;
}