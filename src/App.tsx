import { AddParticipantsForm } from "./components/addParticipantsForm";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeComponent } from "./theme/theme";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeComponent>
        <Header />
        <Card>
          <AddParticipantsForm />
        </Card>
      </ThemeComponent>
    </>
  );
}
