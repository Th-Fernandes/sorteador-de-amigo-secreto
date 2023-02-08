import { useParticipantsList } from "state/hooks/useParticipantsList"

export function ResultsPage() {
  const participantsList = useParticipantsList();

  return (
    <form action="">
      <select name="" id="">
        {
          participantsList.map(participant => (
            <option value="" key={participant}>{participant}</option>
          ))
        }
      </select>
    </form>
  )
}