"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ListNotes from "./(components)/ListNotes";
import AddNoteForm from "./(components)/AddNoteForm";

export default function Home() {
  const [addingNote, setAddingNote] = useState(false);
  const [notes, setNotes] = useState(() => {
    // Ensure localStorage is accessed only on the client side
    if (typeof window !== "undefined") {
      const savedNotes = localStorage.getItem("benjinotes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    }
    return [];
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // New state to track editing index

  useEffect(() => {
    // Save notes to localStorage only if it's available
    if (typeof window !== "undefined") {
      localStorage.setItem("benjinotes", JSON.stringify(notes));
    }
  }, [notes]);

  function saveNoteToggle() {
    setAddingNote(!addingNote);
    setEditingIndex(null); // Reset editing index when toggling form
    setTitle(""); // Clear title
    setContent(""); // Clear content
  }

  function editNote(index) {
    const note = notes[index];
    setTitle(note.title);
    setContent(note.content);
    setAddingNote(true);
    setEditingIndex(index); // Set the current editing index
  }

  function deleteNote(index) {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  }

  function handleNewNoteSubmit(event) {
    event.preventDefault();
    const newTitle = event.target.title.value;
    const newContent = event.target.content.value;

    if (editingIndex !== null) {
      // Update the existing note
      setNotes((prevNotes) =>
        prevNotes.map((note, index) => {
          if (index === editingIndex) {
            return { title: newTitle, content: newContent };
          }
          return note;
        })
      );
    } else {
      // Add a new note
      setNotes((prevNotes) => [
        { title: newTitle, content: newContent },
        ...prevNotes,
      ]);
    }

    // Reset everything after submission
    setTitle("");
    setContent("");
    setAddingNote(false);
    setEditingIndex(null); // Reset the editing index
  }

  return (
    <suppressHydrationWarning>
      {!addingNote && (
        <ListNotes
          saveNoteToggle={saveNoteToggle}
          notes={notes}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      )}

      {addingNote && (
        <AddNoteForm
          saveNoteToggle={saveNoteToggle}
          handleNewNoteSubmit={handleNewNoteSubmit}
          setTitle={setTitle}
          setContent={setContent}
          title={title}
          content={content}
        />
      )}
    </suppressHydrationWarning>
  );
}
