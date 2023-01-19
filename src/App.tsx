import { useEffect, useState } from "react";
import { ConversationButton } from "./components/conversationButton";

export interface Conversation {
  id: string;
  name: string;
  last_updated: string;
  messages: Message[];
}

interface Message {
  id: string;
  text: string;
  last_updated: string;
}

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
  return (
    <div className="flex">
      <div>
        {conversations.map((conversation, index) => {
          return (
            <ConversationButton
              key={conversation.id}
              conversation={conversation}
              openConversationHandler={setOpenConversation}
              chatNumber={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
