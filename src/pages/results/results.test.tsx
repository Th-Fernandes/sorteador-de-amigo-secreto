import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil";
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
    render(
      <RecoilRoot>
        <ResultsPage/>
      </RecoilRoot>
    );  

    const optionsByRole = screen.queryAllByRole('option');
    expect(optionsByRole).toHaveLength(participants.length + 1);
  })
})