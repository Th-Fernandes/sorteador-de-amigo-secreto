import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useShuffleResult } from "state/hooks/useShuffleResult";
import { ShuffledParticipantSelector } from ".";

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


describe('shuffled participant selector', () => {
  const participants = ['Joe', 'Ellen', 'Lea'];
  const shuffleResult = new Map([
    ['Joe', 'Ellen'], ['Ellen', 'Lea'], ['Lea', 'Joe']
  ]);
  
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useShuffleResult as jest.Mock).mockReturnValue(shuffleResult);
  })

  test('should show secret friend when requested', () => {
    render(<ShuffledParticipantSelector/>);

    const select = screen.getByPlaceholderText('Selecione seu nome');
        
    fireEvent.change(select, {
        target: { value: participants[0] }
    });

    const buttonByRole = screen.getByRole('button');
    expect(buttonByRole).not.toBeDisabled();
    fireEvent.click(buttonByRole);

    const secreteFriendAlert = screen.getByRole('alert');
    expect(secreteFriendAlert).toBeInTheDocument();
  })
})