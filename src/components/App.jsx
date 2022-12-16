import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //seting useState to store the all notes as array
  const [notes, setNotes] = useState([]);

  //8 recieving the note input values
  function addNote(newNote) {
    //8.5 adding notes to array
    setNotes((prevNotes) => {
      //holding all prev notes, adding new notes
      return [...prevNotes, newNote];
    });
  }

  //11 triggering function of delete note with its id
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        //7 adding the onAdd prop to access from CreateApp
        onAdd={addNote}
      />
      {/* 9 map the the Note component to store multiple notes and display it on Note, 12 creating index */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
