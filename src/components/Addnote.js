import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'

const Addnote = () => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
        document.getElementById('tag').value = "";
    }
    const handlechange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-around" style={{ width: "45%", height: "fit-content", marginLeft: "6vh", padding:"2vh 2vw", border: "1px solid grey" }}>
            <div className="d-flex justify-content-center my-2" style={{ flexWrap: "wrap", width: "100%", height: "fit-content" }}><h2>Add Your Notes Here</h2></div>
            <div className="container p-2 bd-highlight my-1" style={{ flexWrap: "wrap", width: "100%", minHeight: "44vh" }}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" name='title' minLength={3} placeholder="sample" onChange={handlechange} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="description" name='description' style={{ height: "100px" }} minLength={5} onChange={handlechange}></textarea>
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tag" name='tag' placeholder="sample" onChange={handlechange} />
                    <label htmlFor="tag">Tag(#)</label>
                </div>
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5 } className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </div>
        </div>
    )
}

export default Addnote 