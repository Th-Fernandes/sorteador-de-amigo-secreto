import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useShuffleResult } from "state/hooks/useShuffleResult";
import { ResultsPage } from ".";

jest.mock('state/hooks/useParticipantsList.ts', () => {
  return {
    useParticipantsList: jest.fn()
  }
})
jest.mock('state/hooks/useShuffleResult', () => {
  return {
    useShuffleResult: jest.fn()
  }
})

describe('results page', () => {
  const participants = ['Joe', 'Ellen', 'Lea'];
  const shuffleResult = new Map([
    ['Joe', 'Ellen'], ['Ellen', 'Lea'], ['Lea', 'Joe']
  ])

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useShuffleResult as jest.Mock).mockReturnValue(shuffleResult);
  })

  test('should allow all participants to show your secret friend', () => {
    render(<ResultsPage/>);  

    const optionsByRole = screen.queryAllByRole('option');
    expect(optionsByRole).toHaveLength(participants.length);
  })

  test('should show secret friend when requested', () => {
    render(
      <RecoilRoot>
        <ResultsPage/>
      </RecoilRoot>
    );

   
    const select = screen.getByPlaceholderText('Selecione seu nome')
        
    fireEvent.change(select, {
        target: {
            value: participants[0]
        }
    })

    const botao = screen.getByRole('button')

    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()

  })
})