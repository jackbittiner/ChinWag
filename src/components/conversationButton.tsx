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
    <button
      className="text-blue-500 font-bold uppercase p-3 m-3 block"
      onClick={() => openConversationHandler(conversation)}
    >
      Conversation {chatNumber}
    </button>
  );
};
