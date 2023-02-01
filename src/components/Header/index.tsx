import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        <h1>
          <img src="/img/logo-branco-vertical.png" alt="sorteador de amigo secreto logo" />
        </h1>

        <img src="/img/participante.png" alt="" />
      </div>
    </StyledHeader>
  );
}
