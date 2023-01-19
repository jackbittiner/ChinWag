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
