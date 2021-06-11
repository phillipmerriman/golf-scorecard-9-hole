import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button (props) {
    return (
        <button type="button" class="btn btn-info my-1 mx-1">{props.text}</button>
    )
}

export default Button;
