import { useErrorMessage } from "../../../../state/hooks/useErrorMessage";
import { useSubmitNewParticipant } from "./hooks/useSubmitNewParticipant";
import { StyledAddParticipantsForm, StyledAddParticipantsInput, StyledSubmitParticipantBtn } from "./styles";

export function AddParticipantsForm() {
  const { participantName, setParticipantName, inputRef, submitParticipant } =
    useSubmitNewParticipant();
  const errorMessage = useErrorMessage();

  return (
    <StyledAddParticipantsForm onSubmit={(event) => submitParticipant(event)}>
      <StyledAddParticipantsInput>
        <label className="add_participant_icon" htmlFor="addParticipantsInput">
          <span className="material-icons ">person_add</span>
        </label>
        <input
          ref={inputRef}
          value={participantName}
          onChange={(event) => setParticipantName(event.target.value)}
          id="addParticipantsInput"
          type="text"
          placeholder="Insira o nome dos participantes"
        />
      </StyledAddParticipantsInput>
      <StyledSubmitParticipantBtn disabled={!participantName}>
        Adicionar
      </StyledSubmitParticipantBtn>
      {
        errorMessage &&
        <p role="alert">{errorMessage}</p>
      }
    </StyledAddParticipantsForm>
  );
}
