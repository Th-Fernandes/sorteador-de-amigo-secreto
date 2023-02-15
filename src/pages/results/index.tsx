import App from "App";
import { Heading } from "components/Heading";
import { Footer } from "./components/footer";
import { ShuffledParticipantSelector } from "./components/ShuffledParticipantSelector";

export function ResultsPage() {
  return (
    <App>
      <main>
        <Heading>Quem vai tirar o papelzinho?</Heading>
        <ShuffledParticipantSelector />
      </main>  
      <Footer />
    </App>
  );
}
