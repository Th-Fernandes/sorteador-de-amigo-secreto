import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeComponent } from "./theme/theme";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode
}

export default function App({children}:AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeComponent>
        <Header />
        <Card>
          {children}
        </Card>
      </ThemeComponent>
    </>
  );
}
