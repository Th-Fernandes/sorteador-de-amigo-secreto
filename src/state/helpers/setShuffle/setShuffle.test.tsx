import { setShuffle } from ".";

describe("in a shuffle's friends", () => {
  test('each participant should not shuffle oneself', () => {
    const participants = ['Joe', 'Jay', 'Jax', 'Bia', 'John'];

    const shuffle = setShuffle(participants);
    participants.forEach(participant => {
      const shuffledParticipant = shuffle.get(participant);
      expect(shuffledParticipant).not.toEqual(participant);
    })
  })
})