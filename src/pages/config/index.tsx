import { AddParticipantsForm } from "./components/addParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";
import App from "App";
import { CustomHeading } from "./components/CustomHeading";
import { PageContainer } from "./styles";
import { ErrorMessage } from "./components/ErrorMessage";

export function ConfigPage() {
  return (
    <App>
      <PageContainer>
        <main>
          <CustomHeading>Vamos começar!</CustomHeading>
          <AddParticipantsForm />
          <ErrorMessage />
          <ParticipantsList />
        </main>
        <Footer />
      </PageContainer>
    </App>
  );
}


