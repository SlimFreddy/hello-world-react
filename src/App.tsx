import { useState } from "react";
import "./App.css";
import MessageInput from "./components/MessageInput";

function App() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const getMessageLable = () => {
    return "Nachricht:" + message;
  };

  const addMessageToMessages = () => {
    const newMessages = messages;
    newMessages.push(message);
    setMessages([...newMessages]);
  };

  const removeMessage = (index: number) => {
    const newMessages = messages;
    newMessages.splice(index, 1);
    setMessages([...newMessages]);
  };

  const renderMessageList = messages.map((message, index) => {
    return (
      <p key={index}>
        {index + ". " + message}
        <button onClick={() => removeMessage(index)}>x</button>
      </p>
    );
  });

  return (
    <div className="App">
      <h1>Hello-World-React</h1>
      <MessageInput
        msg={message}
        callBack={(event: string) => {
          setMessage(event);
        }}
      ></MessageInput>
      <p>{getMessageLable()}</p>
      <button onClick={() => addMessageToMessages()}>Hinzufügen</button>
      {renderMessageList}
    </div>
  );
}

export default App;
