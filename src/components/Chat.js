import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const ws = useContext(WebSocketContext);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const {
    chat: { messages },
  } = useSelector(({ chat }) => ({ chat }));

  const onChangeTextInput = ({ target: { value } }) => {
    setText(value);
  };

  const onChangeUsernameTextInput = ({ target: { value } }) => {
    setUsername(value);
  };

  const onPressSend = () => {
    ws.socket.emit("CHAT", { name: username, message: text });
    // assuming emit event will always work
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <p>Centro de Control</p>
      <div style={{ height: "calc(100vh - 120px)", overflow: "scroll" }}>
        {messages.map(x => (
          <ChatMessage data={x} />
        ))}
      </div>
      <input
        placeholder="username"
        onChange={onChangeUsernameTextInput}
        value={username}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          onChange={onChangeTextInput}
          value={text}
          placeholder="write something"
        />
        <button onClick={onPressSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
