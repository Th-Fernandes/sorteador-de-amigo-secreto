import { FormEvent, useState } from "react";
import { useParticipantsList } from "state/hooks/useParticipantsList"
import { useShuffleResult } from "state/hooks/useShuffleResult";

export function ResultsPage() {
  const participantsList = useParticipantsList();
  const [selectedParticipant, setSelectedParticipant] = useState<string>('');
  const [secretFriend, setSecretFriend] = useState<string>('');
  const shuffleResult = useShuffleResult();

  function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();

   if(shuffleResult.has(selectedParticipant)) {
    setSecretFriend(shuffleResult.get(selectedParticipant)!)
   }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <select 
        required 
        name="selectedParticipant" 
        id="selectedParticipant" 
        placeholder="Selecione seu nome"
        value={selectedParticipant}
        onChange={event => setSelectedParticipant(event.target.value)}>
        {
          participantsList.map(participant => (
            <option key={participant}>{participant}</option>
          ))
        }
      </select>
      <button>Sortear!</button>
    </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </>
  )
}