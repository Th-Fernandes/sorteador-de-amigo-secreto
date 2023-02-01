import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { AddParticipantsForm } from ".";

function getHTMLElementsFromFormComponent() {
  const getInputByPlaceholder = screen.getByPlaceholderText('Insira o nome dos participantes');
  const getButtonByRole = screen.getByRole('button');

  return {
    input: getInputByPlaceholder,
    button: getButtonByRole
  }
}

test('should not be able to add participants when input is empty', () => {
  render(<AddParticipantsForm />);

  const { input, button } = getHTMLElementsFromFormComponent();

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
})

test('it should add a participant if it has a filled name on input', () => {
  render(
    <RecoilRoot>
      <AddParticipantsForm />
    </RecoilRoot>
  )

  const { input, button } = getHTMLElementsFromFormComponent();

  function setParticipantNameOnInput() {
    fireEvent.change(input, { target: { value: 'Thiago' } });
  }

  function submitParticipantName() {
    fireEvent.click(button)
  }

  setParticipantNameOnInput();
  submitParticipantName();

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
})