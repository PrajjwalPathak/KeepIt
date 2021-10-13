import React from "react";

const Add = ()=> {
    return (
        <div className="addDiv">
            <input className="addTitle" type="text" placeholder="Enter the title"></input>
            <textarea className="textArea" rows="1" placeholder="Create a note ..."></textarea>
            <button type="submit" className="addButton">ADD</button>
        </div>
    );
}

export default Add;