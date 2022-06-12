import React from "react";
import {createPortal} from "react-dom";
import history from "../history";

const Modal = (props) => {

    return createPortal(
        <div className='ui dimmer modals visible active' onClick={props.onDismiss}>
        <div className="ui modal active visible" onClick={(e) => e.stopPropagation()}>
            <h3 className='header'>{props.title}</h3>
            <div className='content'>{props.description}</div>
            <div className="actions">{props.actions}</div>

        </div>
        </div>,
        document.querySelector('#modal'));

}

export default Modal;