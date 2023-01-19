import { useEffect, useState } from "react";
import { ConversationButton } from "./components/conversationButton";
import { Conversation } from "./types";
import { sortByLastUpdated } from "./helpers/sortByLastUpdated";
import { Message } from "./components/message";

function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [openConversation, setOpenConversation] = useState<Conversation | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/getConversations");
      const json = await response.json();
      const orderedJson = sortByLastUpdated(json);
      setConversations(orderedJson);
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

  const messagesToRender =
    openConversation &&
    sortByLastUpdated(openConversation.messages)
      .reverse()
      .map((message) => {
        return (
          <Message
            key={message.id}
            lastUpdated={message.last_updated}
            text={message.text}
          />
        );
      });

  return (
    <div className="flex px-40 py-20">
      <div className="mr-56">{conversationsToRender}</div>
      <div>{messagesToRender}</div>
    </div>
  );
}

export default App;
