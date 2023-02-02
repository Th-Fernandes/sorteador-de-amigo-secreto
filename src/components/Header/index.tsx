import { useLogoPath } from "./hooks/useLogoPath";
import { StyledHeader } from "./styles";

export function Header() {
  const logoPath = useLogoPath();
  
  return (
    <StyledHeader>
      <div className="header-content">
        <h1>
          <img src={logoPath} alt="sorteador de amigo secreto logo" />
        </h1>

        <img src="/img/participante.png" alt="" />
      </div>
    </StyledHeader>
  );
}
