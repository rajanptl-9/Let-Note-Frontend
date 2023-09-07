import React, { useState, useContext, useEffect, useRef } from 'react'
import Addnote from './Addnote'
import Notetemplet from './Notetemplet'
import noteContext from '../context/noteContext'
import { useNavigate } from 'react-router-dom'

function Home() {

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  const navigate = useNavigate();
  const [note, setNote] = useState({ id: "", updatetitle: "", updatedescription: "", updatetag: "" });
  const stt = useContext(noteContext)
  const { notes, getallnotes, editnote } = stt;
  useEffect(() => {
    if (sessionStorage.getItem('authToken') !== null) {
      getallnotes();
    } else {
      navigate('/login');
    }
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, [])
  const ref = useRef(null);

  const handleupdate = (e) => {
    console.log(note.id, note.updatetitle);
    editnote(note.id, note.updatetitle, note.updatedescription, note.updatetag);
    // var myModal = document.querySelector('#staticBackdrop')
    // myModal.hide()
  }

  const handlechange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const updatenote = (note) => {
    ref.current.click();
    document.getElementById('updatetitle').value = note.title;
    document.getElementById('updatedescription').value = note.description;
    document.getElementById('updatetag').value = note.tag;
    setNote({ id: note._id, updatetitle: note.title, updatedescription: note.description, updatetag: note.tag })
  }

  const stl = {
    main_container: {
      flexWrap: isSmallScreen ? "wrap" : "no-wrap",
      width: "100%",
      height: "41rem",
      backgroundColor: "#708090"
    },
    show_note: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      width: isSmallScreen ? "100%" : "50%",
      height: isSmallScreen ? "fit-content" : "700px",
      maxHeight: "600px"
    },
    show_note_title: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      padding:"10px",
      position: "sticky",
      top: "0",
      backgroundColor:"rgba(146, 142, 133, 0.85)",
      zIndex: "10"      
    },
    notes: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      // alignItems: "flex-start",
      width: "84%",
      height: isSmallScreen ? "300px" : "600px",
      border: "1px solid grey",
      overflowY: "scroll",
      borderRadius: "2px",
      backgroundColor: "#928e85",
      boxShadow: "0 15px 10px rgba(0, 0, 0, 0.1)", 
      margin: isSmallScreen ? "10px" : "0",
    }
  }

  return (
    <>
      <button type="button" className="btn btn-primary" style={{ display: "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch modal
      </button>
      <div className="modal fade modal-dialog-center" ref={ref} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="updatetitle" name='updatetitle' placeholder="sample" onChange={handlechange} />
                <label htmlFor="updatetitle">Title</label>
              </div>
              <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="updatedescription" name='updatedescription' style={{ height: "100px" }} onChange={handlechange}></textarea>
                <label htmlFor="updatedescription">Description</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="updatetag" name='updatetag' placeholder="sample" onChange={handlechange} />
                <label htmlFor="updatetag">Tag(#)</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" disabled={note.updatetitle.length < 3 || note.updatedescription.length < 5} className="btn btn-primary" data-bs-dismiss="modal" onClick={handleupdate}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <main style={stl.page}>
        <div className='d-flex justify-content-around align-items-center' style={stl.main_container}>
          <Addnote />
          <div className='my-1' style={stl.show_note}>
            <div style={stl.notes}>
              <div style={stl.show_note_title}><h2>Your Notes</h2></div>
              {notes.map(element => {
                return (<Notetemplet key={element._id} updatenote={updatenote} note={element} />)
              })}
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home