import React, { useContext } from 'react'
import noteContext from '../context/noteContext';

function Notetemplet(props) {
    const { note, updatenote } = props;
    const context = useContext(noteContext);
    const { deletenote } = context;

    const handledelete = (e) => {
        deletenote(note._id);
    }

    const stl = {
        card: {
            width: "15rem",
            height: "fit-content",
            margin: "0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#d3d3d3"
        },

    }

    return (
        <div className="card my-3" style={stl.card}>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">#{note.tag}</h6>
                <p className="card-text">{note.description}</p>
            </div>
            <div className="form-floating mb-3" style={{ marginLeft: "1rem" }}>
                <i className="fa-sharp fa-solid fa-trash" onClick={handledelete}></i>
                <i className="fa-regular fa-pen-to-square mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { updatenote(note) }}></i>
            </div>
        </div>
    )
}

export default Notetemplet