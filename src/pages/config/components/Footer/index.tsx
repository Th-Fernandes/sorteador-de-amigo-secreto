import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "state/hooks/useParticipantsList"
import { useParticipantsShuffle } from "state/hooks/useParticipantsShuffle";
import { StyledFooter } from "./styles";

export function Footer() {
  const navigateTo = useNavigate();
  const participantsList = useParticipantsList();
  const shuffleParticipants = useParticipantsShuffle();

  function hasEnoughParticipants() {
    return participantsList.length < 3
  }

  function handleNavigateToResultsRoute() {
    shuffleParticipants()
    navigateTo('/results')
  }

 return (
  <StyledFooter>
    <button 
      onClick={handleNavigateToResultsRoute}
      disabled={hasEnoughParticipants()}
      className="submit-participants-btn"
    >
      <img src="/img/play-logo.png" alt="" />
      Iniciar brincadeira!
    </button>

    <img src="/img/sacolas.png" alt="" />
  </StyledFooter>
 )
}