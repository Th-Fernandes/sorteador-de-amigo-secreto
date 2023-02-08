import { render, screen } from "@testing-library/react"
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { ResultsPage } from ".";

jest.mock('state/hooks/useParticipantsList.ts', () => {
  return {
    useParticipantsList: jest.fn()
  }
})

describe('results page', () => {
  const participants = ['Joe', 'Ellen', 'Lea'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  })

  test('should allow all participants to show your secret friend', () => {
    render(<ResultsPage/>);  

    const getOptionsByRole = screen.queryAllByRole('option');
    expect(getOptionsByRole).toHaveLength(participants.length);
  })
})