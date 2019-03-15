import React from "react";

const Buttons = props => (
    <div className="btn-box" onClick={props.onSelect}>
        <button className="btn">{props.name}</button>
    </div>
);

export default Buttons;
