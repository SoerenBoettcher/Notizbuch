/* eslint-disable react/prop-types */
import NotizListe from "../NotizListe/NotizListe.jsx";
import "./Sidebar.css";

function Sidebar({ notes, onDelete, onEditSave }) {
  return (
    <div className="sidebar">
      <h2>Notizen</h2>
      <NotizListe notes={notes} onDelete={onDelete} onEditSave={onEditSave} />
    </div>
  );
}

export default Sidebar;
