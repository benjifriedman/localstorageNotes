"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        <suppressHydrationWarning>
          <button
            onClick={saveNoteToggle}
            className="cursor-pointer border-2 border-[rgb(var(--foreground-rgb))] p-4"
          >
            New Note
          </button>
          <br />

          <br />
          <h1 className="font-mono">Notes</h1>
          {notes.map((note, index) => (
            <div
              key={index}
              className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-[1fr,120px] gap-2 items-start"
            >
              <div>
                <p className="font-semibold">{note.title}</p>
                <p className="pre-wrap">{note.content}</p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  onClick={() => editNote(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </suppressHydrationWarning>
      )}

      {addingNote && (
        <suppressHydrationWarning>
          <button
            onClick={saveNoteToggle}
            className="cursor-pointer border-2 border-[rgb(var(--foreground-rgb))] p-4"
          >
            Back
          </button>
          <br />
          <br />
          <h1 className="font-mono">New Note</h1>
          <form onSubmit={handleNewNoteSubmit}>
            <input
              type="text"
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-sm mt-4"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
              className="w-full h-48 p-4 bg-gray-900 border border-gray-700 rounded-sm mt-4 text-white"
              placeholder="Note"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Save
            </button>
          </form>
        </suppressHydrationWarning>
      )}

      <br />
      <br />

      <p>
        <Link href="/about">Info</Link>
      </p>
    </suppressHydrationWarning>
  );
}
