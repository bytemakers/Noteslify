import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'



export const Modal = ({ yesText, noText, children, isOpen, onClose, onConfirm, title }) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal((
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className="header" >
                    <h3 className="title">{title ?? 'Are You Sure You Want to Continue?'}</h3>
                    <button
                        className="titleCloseBtn"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <div className="body">
                    {children}
                </div>

                <div className="footer">
                    <button
                        onClick={onClose}
                        id="cancelBtn"
                    >
                        {noText ?? 'Cancel'}
                    </button>
                    <button onClick={onConfirm}>{yesText ?? 'Confirm'}</button>
                </div>
            </div>
        </div>
    ),
        document.getElementById('modalPortal')
    )
}