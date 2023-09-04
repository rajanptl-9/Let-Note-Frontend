import React from 'react'
import Inputfields from './Inputfields'

function Modal(props) {
    return (
        <>
            <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Inputfields id={props.id} title={props.title} description={props.description} tag={props.tag}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal