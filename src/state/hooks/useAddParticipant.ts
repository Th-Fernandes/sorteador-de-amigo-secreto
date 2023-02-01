import { useRecoilState } from "recoil";
import { errorState, participantsListState } from "../atom";

export function useAddParticipant() {
  const [ list, setList ] = useRecoilState(participantsListState);
  const [ error, setError ] = useRecoilState(errorState);

  function addParticipantOnParticipantsState(newParticipantName: string) {
    if(list.includes(newParticipantName)) {
      const setErrorMessage = setError('Nomes duplicados não são permitidos!');
      const cleanErrorMessageTimer = setTimeout(() => setError(""), 5000);
      return;
    }

    return setList((currentList) => [...currentList, newParticipantName]);
  }

  return addParticipantOnParticipantsState;
}
