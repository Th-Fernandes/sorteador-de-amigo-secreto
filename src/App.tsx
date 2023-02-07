import { AddParticipantsForm } from "./pages/config/components/addParticipantsForm"
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeComponent } from "./theme/theme";
import { Footer } from "pages/config/components/Footer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeComponent>
        <Header />
        <Card>
          <main>
            <AddParticipantsForm />
          </main>
          <Footer />
        </Card>
      </ThemeComponent>
    </>
  );
}
