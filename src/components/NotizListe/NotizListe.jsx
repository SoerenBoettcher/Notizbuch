/* eslint-disable react/prop-types */
import Notiz from "../Notiz/Notiz.jsx";
import "./NotizListe.css";

function NotizListe({ notes, onDelete, onEditSave }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Notiz
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEditSave={onEditSave}
        />
      ))}
    </div>
  );
}

export default NotizListe;
