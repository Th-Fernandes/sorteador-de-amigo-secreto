import { AddParticipantsForm } from "./components/addParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";
import App from "App";
import { Heading } from "components/Heading";

export function ConfigPage() {
  return (
    <App>
      <main>
        <Heading>Vamos começar!</Heading>
        <AddParticipantsForm />
        <ParticipantsList />
      </main>
      <Footer />
    </App>
  );
}
