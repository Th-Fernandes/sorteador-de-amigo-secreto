import { useParticipantsList } from "state/hooks/useParticipantsList"
import { StyledParticipantsList } from "./styles";

export function ParticipantsList() {
  const participants = useParticipantsList();

  return (
    <StyledParticipantsList>
      {
        participants.map(participant => (
          <li key={participant}>{participant}</li>
        ))
      }
    </StyledParticipantsList>
  )
}