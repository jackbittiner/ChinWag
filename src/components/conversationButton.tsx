import { SetStateAction } from "react";
import { Conversation } from "../types";

interface ConversationButtonProps {
  conversation: Conversation;
  openConversationHandler: SetStateAction<any>;
  chatNumber: number;
}

export const ConversationButton = ({
  conversation,
  openConversationHandler,
  chatNumber,
}: ConversationButtonProps) => {
  return (
    <p onClick={() => openConversationHandler(conversation)}>
      Conversation {chatNumber}
    </p>
  );
};
