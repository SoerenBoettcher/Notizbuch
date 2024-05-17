/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Notiz.css";

function Notiz({ note, onDelete, onEditSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const saveHandler = () => {
    onEditSave(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="save-button" onClick={saveHandler}>
            Speichern
          </button>
          <button className="cancel-button" onClick={() => setIsEditing(false)}>
            Abbrechen
          </button>
        </div>
      ) : (
        <div>
          <p>{note.text}</p>
          <small>{note.timestamp}</small>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Bearbeiten
          </button>
          <button className="delete-button" onClick={() => onDelete(note.id)}>
            Löschen
          </button>
        </div>
      )}
    </div>
  );
}

export default Notiz;
