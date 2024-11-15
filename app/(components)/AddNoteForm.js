import React from "react";

const AddNoteForm = (props) => {
  return (
    <suppressHydrationWarning>
      <button
        onClick={props.saveNoteToggle}
        className="cursor-pointer border-2 border-[rgb(var(--foreground-rgb))] p-4"
      >
        Back
      </button>
      <br />
      <br />
      <h1 className="font-mono">New Note</h1>
      <form onSubmit={props.handleNewNoteSubmit} className="w-full max-w-2xl">
        <input
          type="text"
          className="w-full p-4 bg-gray-900 border border-gray-700 rounded-sm mt-4"
          placeholder="Title"
          name="title"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="w-full h-48 p-4 bg-gray-900 border border-gray-700 rounded-sm mt-4 text-white"
          placeholder="Note"
          name="content"
          value={props.content}
          onChange={(e) => props.setContent(e.target.value)}
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
  );
};

export default AddNoteForm;
