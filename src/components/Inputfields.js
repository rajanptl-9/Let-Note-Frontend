import React from 'react'

function Inputfields(props) {
    const handlechange = (e) => {
         
    }
    return (
        <form>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="title" name='title' value={props.title} placeholder="sample"  onChange={handlechange}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="description" name='description' style={{ height: "100px" }}  onChange={handlechange}></textarea>
                <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="tag" name='tag' value={props.tag} placeholder="sample" onChange={handlechange}/>
                <label htmlFor="tag">Tag</label>
            </div>
        </form>
    )
}

export default Inputfields