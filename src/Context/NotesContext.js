import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const notesFromLocal = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  const [notes, setNotes] = useState(notesFromLocal);

  const [newNotes, setNewNotes] = useState({
    id: notes.length,
    title: "",
    note: "",
    createdAt: new Date().toLocaleString("en-GB"),
  });

  const values = {
    notes,
    setNotes,
    newNotes,
    setNewNotes,
  };
  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
