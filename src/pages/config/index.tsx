import { AddParticipantsForm } from "./components/addParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";
import App from "App";
import { CustomHeading } from "./components/CustomHeading";
import { PageContainer } from "./styles";

export function ConfigPage() {
  return (
    <App>
      <PageContainer>
        <main>
          <CustomHeading>Vamos começar!</CustomHeading>
          <AddParticipantsForm />
          <ParticipantsList />
        </main>
        <Footer />
      </PageContainer>
    </App>
  );
}


