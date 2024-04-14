import React from "react";

function Note(pr) {
  return (
    <div className="note">
      <h1>{pr.title}</h1>
      <p>{pr.content}</p>
    </div>
  );
}

export default Note;
