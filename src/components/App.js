import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

console.log(notes);

function createNotes(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is a note title" content="This is the content" /> */}
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
