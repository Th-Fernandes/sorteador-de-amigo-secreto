import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from ".";
import { useParticipantsList } from "state/hooks/useParticipantsList";

jest.mock("state/hooks/useParticipantsList.ts", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigation = jest.fn();
const mockShuffle = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

jest.mock("state/hooks/useParticipantsShuffle.ts", () => {
  return {
    useParticipantsShuffle: () => mockShuffle,
  };
});

describe("when it does not have enough participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(["Joe", "Eleanor"]);
  });

  test("it should have a disabled button if list less than 3", () => {
    render(<Footer />);

    const getButtonByRole = screen.getByRole("button");
    expect(getButtonByRole).toBeDisabled();
  });
});

describe("when it has enough participants", () => {
  const participantsList = ["Joe", "Eleanor", "James"];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsList);
  });

  test("it should be able to click on the button", () => {
    render(<Footer />);

    const getButtonByRole = screen.getByRole("button");
    expect(getButtonByRole).toBeEnabled();
  });

  test("it should call useNavigate and useParticipantsShuffle hook and shuffle begins", () => {
    render(<Footer />);

    const getButtonByRole = screen.getByRole("button");
    expect(getButtonByRole).toBeEnabled();

    const submitParticipants = fireEvent.click(getButtonByRole);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("/results");
    expect(mockShuffle).toHaveBeenCalledTimes(1);
  });
});
