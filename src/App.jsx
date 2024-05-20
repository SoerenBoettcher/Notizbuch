import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NotizFormular from "./components/Notiz-Formular/NotizFormular.jsx";
import Footer from "./components/footer/Footer.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (text, priority) => {
    const newNote = {
      id: Date.now(),
      text,
      priority,
      timestamp: new Date().toLocaleString(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const editNote = (id, newText, newPriority) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText, priority: newPriority } : note
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <NotizFormular onAdd={addNote} />
          <Sidebar notes={notes} onDelete={deleteNote} onEditSave={editNote} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
