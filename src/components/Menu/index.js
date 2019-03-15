import React from "react";

const Menu = props => (
    <li>
        <div>
            <img className="thumbnail" src={props.image} alt="recipe" />
        </div>
        <div className="description">
            <h3>{props.label}</h3>
            <p>{props.ingredients}</p>
        </div>
    </li>
);

export default Menu;
