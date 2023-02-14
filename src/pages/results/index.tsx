import App from "App";
import { Heading } from "components/Heading";
import { FormEvent, useState } from "react";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useShuffleResult } from "state/hooks/useShuffleResult";
import { Footer } from "./components/footer";

export function ResultsPage() {
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
    <App>
      <main>
        <Heading>Quem vai tirar o papelzinho?</Heading>

        <form onSubmit={handleSubmit}>
          <select
            required
            name="selectedParticipant"
            id="selectedParticipant"
            placeholder="Selecione seu nome"
            value={selectedParticipant}
            onChange={(event) => setSelectedParticipant(event.target.value)}
          >
            {participantsList.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>

          <span>Clique em em sortear para ver quem é seu amigo secreto!</span>
          
          <div>
            <button>
              <img src="/img/casino.png" alt="" />
              Sortear!
            </button>
            {secretFriend && <p role="alert">{secretFriend}</p>}
          </div>
        </form>
      </main>
      <Footer />
    </App>
  );
}
