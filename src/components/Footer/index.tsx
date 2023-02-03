import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../../state/hooks/useParticipantsList"

export function Footer() {
  const navigateTo = useNavigate();
  const participantsList = useParticipantsList();
  
  function hasEnoughParticipants() {
    return participantsList.length < 3
  }

  function handleNavigateToRaffleRoute() {
    navigateTo('/raffle')
  }

 return (
  <footer>
    <button 
      onClick={handleNavigateToRaffleRoute}
      disabled={hasEnoughParticipants()}
    >
      Iniciar brincadeira!
    </button>
  </footer>
 )
}