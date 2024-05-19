/* eslint-disable react/prop-types */
import { useState } from "react";

function NotizFormular({ onAdd }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("weniger Wichtig");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(text, priority);
    setText("");
    setPriority("weniger Wichtig");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Neue Notiz hinzufügen"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="sehr wichtig">sehr Wichtig</option>
        <option value="wichtig">Wichtig</option>
        <option value="weniger wichtig">weniger Wichtig</option>
      </select>
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default NotizFormular;
