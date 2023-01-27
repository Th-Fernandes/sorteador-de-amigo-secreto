import styled from 'styled-components'

const styledBorder = `
  border: 1px solid #000;
  border-radius: 3.75rem;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
`

export const StyledAddParticipantsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media(min-width: 768px) {
    max-width: 72.6rem;
    height: 8rem;
    flex-direction: row;
    gap: 0;
    ${styledBorder};
  }
  
  > .add_participants_input_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    padding: 1.4rem 2.6rem;
    height: 100%;

    ${styledBorder};

    @media(min-width: 768px) {
      border-radius: 3.75rem  0 0 3.75rem;
      gap: 3.1rem;
      border: none;
      box-shadow: none;
    }

    > .add_participant_icon {
      color:  rgba(0, 0, 0, 0.3);
    }

    > #addParticipantsInput {
      flex-grow: 1;
      border: none;
      color: rgba(0, 0, 0, 0.3);

      &:focus {
        outline: none;
        border: none
      }
    }
  }

   .submit_participant_button {
    min-width: 15.5rem;
    padding-block: 1.1rem;
    ${styledBorder};
    
    @media(min-width: 768px) {
      border-left: 2px solid #000000;
      height: 100%;
      border-radius: 0 3.75rem  3.75rem 0;
    }
  }
`

