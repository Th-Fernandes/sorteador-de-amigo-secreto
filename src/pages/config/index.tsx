import { AddParticipantsForm } from "./components/addParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";
import App from "App";

export function ConfigPage() {
  return (
    <App>
      <main>
        <AddParticipantsForm />
        <ParticipantsList />
      </main>
      <Footer />
    </App>
  );
}
