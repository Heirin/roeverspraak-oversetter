import React from "react";

function Input(props) {
    return <form className={"input " + props.class} onSubmit={props.submit}>
        <label>{props.text}</label>
        <textarea></textarea>
        <button type="submit">Oversett</button>
    </form>
}

export default Input;