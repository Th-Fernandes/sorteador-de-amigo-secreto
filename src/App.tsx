import { AddParticipantsForm } from "./components/addParticipantsForm";
import { Header } from "./components/Header";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeComponent } from "./theme/theme";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeComponent>
        <Header />
        <AddParticipantsForm />
      </ThemeComponent>
    </>
  );
}
