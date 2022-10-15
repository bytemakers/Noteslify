import React, { useContext, useEffect, useState } from 'react'
import '../Notes/Notes.css'
import Sidenav from '../Sidenav/Sidenav'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Switch from 'react-js-switch';
import GlobalContext from '../../context/GlobalContext';
import NotesContext from '../../context/NotesContext';
import { marked } from 'marked';
import RenderInWindow from '../Notes/RenderInWindow';
import MarkdownNotes from '../Notes/MarkdownNotes';
import {Helmet} from "react-helmet";

const Folders = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [addNoteTitle, setAddNoteTitle] = useState('');
    const [addNoteDescription, setAddNoteDescription] = useState('');
    const [updateNoteId, setUpdateNoteId] = useState("");
    const [progress, setProgress] = useState(0);
    const {theme , setTheme} = useContext(GlobalContext);
    const {
      notes,
      getNotes,
      getNote,
      addNewNote,
      updateExistingNote,
      deleteNote,
    } = useContext(NotesContext);
    const [isAddMarkdownWindowOpen, setIsAddMarkdownWindowOpen] = useState(false);
    const [isEditMarkdownWindowOpen, setIsEditMarkdownWindowOpen] = useState(false);
    const openAddNoteModalForNewNote = () => {
        const popupBox = document.getElementById('popup-box');
        popupBox.classList.add('show');
        document.getElementById('modal-title-input').focus();
        // setModalHeading("Add a new Note");
        // const popupTitle = popupBox.querySelector("header p");
        // popupTitle.innerText = "Add a new Note";
        setAddNoteDescription('');
        setAddNoteTitle('');
    }

    const closeAddNoteModal = () => {
        document.getElementById('popup-box').classList.remove('show');
    }

    const closeAddMarkdownWindow = () =>{
      if(isAddMarkdownWindowOpen){
        setIsAddMarkdownWindowOpen(false);
        closeAddNoteModal();
      }
    }
    
    const closePreviewNoteModal = () => {
      document.getElementById('popup-box-preview').classList.remove('show');
      setAddNoteTitle('');
      setAddNoteDescription('');
    }

    const openAddMarkdownWindow = () =>{
      setIsAddMarkdownWindowOpen(true);
    //  closeAddNoteModal();
    }
  
  return (
    <>
    <Helmet>
        <title>Noteslify | Dashboard</title>
        <meta name="description" content="Noteslify. View your files and dashboard here." />
    </Helmet>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Sidenav />
    <section className="home">
<div className="text">Folders</div>
             <div id='popup-box' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Add a new folder</p>
              <i className="fa-brands fa-markdown" onClick={openAddMarkdownWindow}></i>
              <i onClick={closeAddNoteModal} className="fa-solid fa-xmark"></i>
            </header>
            <form id="notes-form" action="#" encType="multipart/form-data">
              <div className="row title">
                {/* <label>Title</label> */}
                <input id='modal-title-input' value={addNoteTitle} onChange={(e) => setAddNoteTitle(e.target.value)} type="text" name="title" spellcheck="false" placeholder='Folder name'/>
              </div>
              <button>Add Folder</button>
            </form>
            {isAddMarkdownWindowOpen && (
              <RenderInWindow closeMarkdownWindow={closeAddMarkdownWindow}>
                <MarkdownNotes closeMarkdownWindow={closeAddMarkdownWindow} 
                  addNoteTitle={addNoteTitle} setAddNoteTitle={setAddNoteTitle}
                  addNoteDescription={addNoteDescription} setAddNoteDescription={setAddNoteDescription}
                //   submitNote={addANewNote}
                />
              </RenderInWindow>
            )}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <li onClick={openAddNoteModalForNewNote} className="add-box">
          <div className="icon"><i className="fa-solid fa-plus"></i></div>
          <p>Add new folder</p>
        </li>

        {/* {notes.map((note) => {
            const dateStu = note.createdAt;
            return (
                <li id={note._id} key={note._id} className="note" onClick={() => openAddNoteModalForPreviewNote(note._id)}>
                    <div className="details">
                        <div dangerouslySetInnerHTML={{ __html: marked(note.title) }}></div>

                        <div dangerouslySetInnerHTML={{ __html: marked(note.description) }}></div>

                    </div>
                    <div className="bottom-content">
                        <span>{convertToMonthName(new Date(dateStu).getMonth()) + " " + new Date(dateStu).getDate().toString() + ", " + new Date(dateStu).getFullYear()}</span>
                        <div id={`settings-${note._id}`} className="settings" onClick={(e)=> e.stopPropagation()}>
                            <i onClick={() => openMenu(note._id)} className="fa-solid fa-ellipsis"></i>
                            <ul className="menu show">
                                <li onClick={() => openAddNoteModalForEditNote(note._id)}><i className="fa-solid fa-pen"></i>Edit</li>
                                <li onClick={() => onDeleteNote(note._id)}><i className="fa-regular fa-trash-can"></i>Delete</li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        })} */}
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </section>

    </>
  )
}

export default Folders