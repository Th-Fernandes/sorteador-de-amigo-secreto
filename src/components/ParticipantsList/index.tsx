import { useParticipantsList } from "../../state/hooks/useParticipantsList"

export function ParticipantsList() {
  const participants = useParticipantsList();

  return (
    <ul>
      {
        participants.map(participant => (
          <li key={participant}>{participant}</li>
        ))
      }
    </ul>
  )
}