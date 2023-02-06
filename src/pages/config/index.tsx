import { AddParticipantsForm } from "./components/addParticipantsForm";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ParticipantsList } from "../../components/ParticipantsList";

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
