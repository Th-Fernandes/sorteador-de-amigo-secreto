import { useState, useRef } from "react";
import { useAddParticipant } from "../../../../../state/hooks/useAddParticipant";

export function useSubmitNewParticipant() {
  const [participantName, setParticipantName] = useState<string>("");
  const addParticipantOnParticipantsList = useAddParticipant();
  const inputRef = useRef<HTMLInputElement>(null);

  function submitParticipant(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addParticipantOnParticipantsList(participantName);
    setParticipantName("");
    inputRef.current?.focus();
  }

  return { 
    participantName, 
    setParticipantName, 
    inputRef, 
    submitParticipant 
  }
}