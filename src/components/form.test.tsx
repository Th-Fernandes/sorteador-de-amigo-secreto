import { render, screen } from "@testing-library/react";
import React from "react";

test('should not be able to add participants when input is empty', () => {
  render(<Form/>);

  function getHTMLElementsFromFormComponent() {
    const getInputByPlaceholder = screen.getByPlaceholderText('Insira o nome dos participantes');
    const getButtonByRole = screen.getByRole('button');

    return {
      input: getInputByPlaceholder,
      button: getButtonByRole
    }
  }

  const { input, button } = getHTMLElementsFromFormComponent();

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
})