import { AddParticipantsForm } from "./components/addParticipantsForm";
import { Card } from "../../components/Card";
import { Header } from "components/Header";
import { ParticipantsList } from "./components/ParticipantsList";
import { Footer } from "./components/Footer";

export function ConfigPage() {
  return (
    <>
      <Header />
      <Card>
        <AddParticipantsForm />
        <ParticipantsList />
        <Footer />
      </Card>
    </>
  );
}
