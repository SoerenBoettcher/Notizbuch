/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Notiz.css";

function Notiz({ note, onDelete, onEditSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);
  const [newPriority, setNewPriority] = useState(note.priority);

  const saveHandler = () => {
    onEditSave(note.id, newText, newPriority);
    setIsEditing(false);
  };

  const getBackgroundColor = (priority) => {
    switch (priority) {
      case "wichtig":
        return "yellow";
      case "weniger wichtig":
        return "lightblue";
      default:
        return "orange";
    }
  };

  return (
    <div
      className="note"
      style={{ backgroundColor: getBackgroundColor(note.priority) }}
    >
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="sehr wichtig">sehr Wichtig</option>
            <option value="wichtig">Wichtig</option>
            <option value="weniger wichtig">weniger Wichtig</option>
          </select>
          <div className="button-div">
            <button className="save-button" onClick={saveHandler}>
              Speichern
            </button>
            <button
              className="cancel-button"
              onClick={() => setIsEditing(false)}
            >
              Abbrechen
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>{note.text}</p>
          <small>{note.timestamp}</small>
          <div className="button-div">
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Bearbeiten
            </button>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
              Löschen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notiz;
