import { StyledAddParticipantsForm } from "./styles";

export function AddParticipantsForm() {
  return (
    <StyledAddParticipantsForm>
      <div className="add_participants_input_container">
        <label className="add_participant_icon" htmlFor="addParticipantsInput">
        < span className="material-icons ">person_add</span>
        </label>
        <input
          id="addParticipantsInput"
          type="text"
          placeholder="Insira o nome dos participantes"
        />
      </div>
      <button className="submit_participant_button" disabled>Adicionar</button>
    </StyledAddParticipantsForm>
  );
}
