/* eslint-disable react/prop-types */
import { useState } from "react";

function NotizFormular({ onAdd }) {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Neue Notiz hinzufügen"
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default NotizFormular;
