import { useState, FormEvent } from "react";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useShuffleResult } from "state/hooks/useShuffleResult";
import { StyledAlertMessage, StyledForm, StyledSelect, StyledSubmitButton } from "./styles";

export function ShuffledParticipantSelector() {
  const participantsList = useParticipantsList();
  const [selectedParticipant, setSelectedParticipant] = useState<string>("");
  const [secretFriend, setSecretFriend] = useState<string>("");
  const shuffleResult = useShuffleResult();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (shuffleResult.has(selectedParticipant)) {
      setSecretFriend(shuffleResult.get(selectedParticipant)!);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSelect
        required
        name="selectedParticipant"
        id="selectedParticipant"
        placeholder="Selecione seu nome"
        value={selectedParticipant}
        onChange={(event) => setSelectedParticipant(event.target.value)}
      >
        <option>Selecione seu nome</option>
        {participantsList.map((participant) => (
          <option key={participant}>{participant}</option>
        ))}
      </StyledSelect>

      <span>Clique em em sortear para ver quem é seu amigo secreto!</span>

      <div>
        <StyledSubmitButton>
          <img src="/img/casino.png" alt="" />
          Sortear!
        </StyledSubmitButton>
        {secretFriend && (
          <StyledAlertMessage role="alert" >
            {secretFriend}
          </StyledAlertMessage>
        )}
      </div>
    </StyledForm>
  );
}
