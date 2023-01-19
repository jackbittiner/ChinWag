import { useEffect, useState } from "react";
import { ConversationButton } from "./components/conversationButton";
import { Conversation } from "./types";

function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [openConversation, setOpenConversation] = useState<Conversation | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/getConversations");
      const json = await response.json();
      setConversations(json);
    };
    fetchData();
  }, []);

  const conversationsToRender = conversations.map((conversation, index) => {
    return (
      <ConversationButton
        key={conversation.id}
        conversation={conversation}
        openConversationHandler={setOpenConversation}
        chatNumber={index + 1}
      />
    );
  });

  return (
    <div className="flex">
      <div>{conversationsToRender}</div>
    </div>
  );
}

export default App;
