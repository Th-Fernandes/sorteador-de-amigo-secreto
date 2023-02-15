import { AddParticipantsForm } from "./components/addParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";
import App from "App";
import { CustomHeading } from "./components/CustomHeading";

export function ConfigPage() {
  return (
    <App>
      <main>
        <CustomHeading>Vamos começar!</CustomHeading>
        <AddParticipantsForm />
        <ParticipantsList />
      </main>
      <Footer />
    </App>
  );
}


