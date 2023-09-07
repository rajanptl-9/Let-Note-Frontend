import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../context/noteContext'

const Addnote = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleMediaChange = (event) => {
            setIsSmallScreen(event.matches);
        };

        mediaQuery.addListener(handleMediaChange);

        return () => {
            mediaQuery.removeListener(handleMediaChange);
        };
    }, []);

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

    const stl = {
        add_note: {
            width: isSmallScreen ? "84%" : "45%",
            height: "fit-content",
            padding: "40px 30px",
            margin: isSmallScreen ? "20px" : "0",
            backgroundColor: "#928e85",
            boxShadow: "0 15px 10px rgba(0, 0, 0, 0.1)", 
        },
        add_note_head: {
            paddingLeft: "8px",
            width: "100%",
            height: "fit-content"
        },
        add_note_form: {
            flexWrap: "wrap",
            width: "100%",
            minHeight: "44vh"
        }
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-around" style={stl.add_note}>
            <div className="container p-2 bd-highlight my-1" style={stl.add_note_form}>
                <div className="d-flex justify-content-left my-2" style={stl.add_note_head}><h2>Create Note</h2></div>
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
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </div>
        </div>
    )
}

export default Addnote 