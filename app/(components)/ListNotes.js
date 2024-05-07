import React from "react";
import Link from "next/link";

const NewNote = (props) => {
  return (
    <>
      <suppressHydrationWarning>
        <button
          onClick={props.saveNoteToggle}
          className="cursor-pointer border-2 border-[rgb(var(--foreground-rgb))] p-4"
        >
          New Note
        </button>
        <br />

        <br />
        <h1 className="font-mono">Notes</h1>
        {props.notes.map((note, index) => (
          <div
            key={index}
            className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-[1fr,120px] gap-4 items-start"
          >
            <div>
              <p className="font-semibold">{note.title}</p>
              <p className="pre-wrap">{note.content}</p>
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={() => props.editNote(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 max-h-10 overflow-hidden"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteNote(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded max-h-10 overflow-hidden relative top-[-1px]"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </suppressHydrationWarning>
      <br />
      <br />

      <p>
        <Link href="/about">Info</Link>
      </p>
    </>
  );
};

export default NewNote;
