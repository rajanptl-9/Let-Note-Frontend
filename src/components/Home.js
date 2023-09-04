import React, { useState, useContext, useEffect, useRef } from 'react'
import Addnote from './Addnote'
import Notetemplet from './Notetemplet'
import noteContext from '../context/noteContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ id: "", updatetitle: "", updatedescription: "", updatetag: "" });
  const stt = useContext(noteContext)
  const { notes, getallnotes, editnote } = stt;
  useEffect(() => {    
    if(sessionStorage.getItem('authToken') !== null){
      getallnotes();
    }else{
      navigate('/login');
    }
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
              <button type="button" disabled={note.updatetitle.length < 3 || note.updatedescription.length < 5 } className="btn btn-primary" data-bs-dismiss="modal" onClick={handleupdate}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className='d-flex justify-content-around align-items-center' style={{ flexWrap: "wrap", width: "100%", height: "fit-contentd" }}>
          <Addnote />
          <div className='d-flex justify-content-around my-1' style={{ flexWrap: "wrap", width: "50%", height: "90vh", padding: "10px" }}>
            <div className="d-flex flex-column align-items-center justify-content-around" style={{ width: "45%", height: "fit-content" }}>
              <div className="d-flex justify-content-center" style={{ flexWrap: "wrap", width: "100%", height: "fit-content" }}><h1>Your Notes</h1></div>              
              <div className="d-flex justify-content-around " style={{ flexWrap: "wrap", width: "90vh", height:"80vh", border: "1px solid grey", overflowY: "scroll" }}>
                {notes.map(element => {
                  return (<Notetemplet key={element._id} updatenote={updatenote} note={element} />)
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home