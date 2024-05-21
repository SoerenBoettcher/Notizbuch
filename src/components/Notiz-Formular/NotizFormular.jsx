/* eslint-disable react/prop-types */
import { useState } from "react";
import "./NotizFormular.css";

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
    <div className="main-content">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Neue Notiz hinzufügen"
        />
        <div className="form-select">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="sehr wichtig">sehr Wichtig</option>
            <option value="wichtig">Wichtig</option>
            <option value="weniger wichtig">weniger Wichtig</option>
          </select>
          <button type="submit">Hinzufügen</button>
        </div>
      </form>
    </div>
  );
}

export default NotizFormular;
