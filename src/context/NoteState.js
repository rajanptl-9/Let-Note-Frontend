import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  let allnotes = [];
  const [notes, setNotes] = useState(allnotes)

  //fetchallnotes
  const getallnotes = async () => {    
    let url = `${host}/api/notes/fetchallnotes`;
    const fetchednotes = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': sessionStorage.getItem('authToken')
      }
    })
    const notesinjson = await fetchednotes.json();
    setNotes(notesinjson);
  }

  //Add note
  const addnote = async (title, description, tag) => {
    const addresponse = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem('authToken')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await addresponse.json();
    setNotes(notes.concat(json));
  }

  //delete note
  const deletenote = async (id) => {
    const deleteresponse = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem('authToken')
      }
    });
    const json = await deleteresponse.json();
    const newnotes = notes.filter((note) => { return note._id !== id });
    setNotes(newnotes);
  }

  //edit note
  const editnote = async (id, title, description, tag) => {
    
    const updateresponse = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem('authToken')
      },
      body:JSON.stringify({ title, description, tag})
    });
    
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i]._id) {
          notes[i].title = title;
          notes[i].description = description;
          notes[i].tag = tag;
          break;
        }
    }
    getallnotes();
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, getallnotes, addnote, deletenote, editnote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;