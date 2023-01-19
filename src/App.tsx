import {useEffect, useState} from "react";

interface Conversation {
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
                    return <p>Conversation {index + 1}</p>;
                })}
            </div>
        </div>
    );
}

export default App;