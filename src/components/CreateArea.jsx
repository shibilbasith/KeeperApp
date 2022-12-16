import React, { useState } from "react";

function CreateArea(props) {
  //2 setting the useState hook to store the two or more input values
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //3 targetting the value that typed and store it/update state
  function handleChange(event) {
    const { name, value } = event.target;

    //4 updating state with prevValue and return value
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //6 function to add button to submit the note
  function submitNote(event) {
    props.onAdd(note); //7.5 calling the add prop and passing the current note
    //13 To clear the text area after adding the note
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); //to prevent the default refresh method
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange} //1 when type occure call this function
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />

        <button
          //5 Adding the onclick event to add the note and calling the function
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
