import React from "react";

function Note(props) {
  //10 calling function that delete button clicked
  function handleClick() {
    //it will trigger the function from the App.jsx-> deleteNote()
    //13 passing the id of the the notes
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
