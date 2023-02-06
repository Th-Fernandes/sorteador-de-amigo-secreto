import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ParticipantsList } from '.';
import { useParticipantsList } from '../../../../state/hooks/useParticipantsList';

jest.mock('../../../../state/hooks/useParticipantsList.ts', () => {
  return {
    useParticipantsList: jest.fn()
  }
})

function getHTMLElementsFromParticipantsList() {
  const getParticipantsByRole = screen.queryAllByRole('listitem');

  return {
    participantListItems: getParticipantsByRole
  };
}

describe('ParticipantsList.tsx empty list', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  })

  test('it should be rendered without elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );
    const { participantListItems } = getHTMLElementsFromParticipantsList();

    expect(participantListItems).toHaveLength(0);
  })
})

describe('ParticipantsList.tsx filled list', () => {
  const participants = ['John', 'Joseph'];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  })

  test('it should be rendered with elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

 
    const { participantListItems } = getHTMLElementsFromParticipantsList();

    expect(participantListItems).toHaveLength(participants.length);
  })
})