import React, { useState } from 'react'
import './Notes.css'
import 'react-toastify/dist/ReactToastify.css';
import MDEditor from '@uiw/react-md-editor';


export default function MarkdownNotes(props) {

  console.log(props);
  const addANewNote=async(e)=>{
    e.preventDefault();

      props.closeMarkdownWindow();
      props.submitNote(e);
  }
  return (
    <div className="content">

  <form onSubmit={addANewNote} id="notes-form" action="#" enctype="multipart/form-data">
    <div className="md">
      <div className="row title">
      <input id='modal-title-input' value={props.addNoteTitle} onChange={(e) => props.setAddNoteTitle(e.target.value)} type="text" name="title" spellcheck="false"/>
    </div>
    <div className="row description wmde-markdown-var">
      <MDEditor value={props.addNoteDescription} onChange={(e) => props.setAddNoteDescription(e)}  />
    </div>
    <button>Save and Close</button>
    </div>
    </form>
</div>
  )
}
