import { useSetRecoilState } from "recoil";
import { participantsListState } from "../atom";

export function useAddParticipant() {
  const setList = useSetRecoilState(participantsListState);

  function addParticipantOnParticipantsState(newParticipantName: string) {
    return setList((currentList) => [...currentList, newParticipantName]);
  }

  return addParticipantOnParticipantsState;
}
