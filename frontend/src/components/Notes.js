import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const Notes = () => {
    const [notesList, setNotesList] = useState([]);
    const [addNoteTitle, setAddNoteTitle] = useState('');
    const [addNoteDescription, setAddNoteDescription] = useState('');
    const [updateNoteId, setUpdateNoteId] = useState("");
    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    const getAllNotes = async () => {
        const token = sessionStorage.getItem('auth-token');
        setProgress(20);
        const response = await fetch('http://localhost:8181/api/notes/getallnotes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        setProgress(50);
        const json = await response.json();
        setProgress(60);
        setNotesList(json);
        setProgress(100);
    }

    const getSingleNote = async (id) => {
      const token = sessionStorage.getItem('auth-token');
      const response = await fetch(`http://localhost:8181/api/notes/getnote/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': token
          }
      });
      const json = await response.json();
      setAddNoteTitle(json.title);
      setAddNoteDescription(json.description);
    }

    const convertToMonthName = (num) => {
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
        return months[num];
    }

    const openMenu = (noteId) => {
        const note = document.getElementById(noteId);
        const settingsList = document.getElementById(`settings-${noteId}`);
        settingsList.classList.add("show");

        document.addEventListener("click", e => {
            if(e.target.tagName !== "I") {
                settingsList.classList.remove("show");
            }
        });
    }

    const deleteNote = async (id) => {
        if (window.confirm('Are You sure you want to delete this note?')) {
            const token = sessionStorage.getItem('auth-token');
            const response = await fetch(`http://localhost:8181/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json();
            toast.success(json.success);
            console.log(json);

            await getAllNotes();
        }
    }

    const openAddNoteModalForNewNote = () => {
        const popupBox = document.getElementById('popup-box');
        popupBox.classList.add('show');

        document.getElementById('modal-title-input').focus();

        // setModalHeading("Add a new Note");

        // const popupTitle = popupBox.querySelector("header p");
        // popupTitle.innerText = "Add a new Note";
    }

    const openAddNoteModalForEditNote = async (id) => {
      const popupBox = document.getElementById('popup-box-edit');
      popupBox.classList.add('show');

      document.getElementById('modal-title-input').focus();

      await getSingleNote(id);

      setUpdateNoteId(id);

    }

    const closeAddNoteModal = () => {
        document.getElementById('popup-box').classList.remove('show');
    }
    
    const closeEditNoteModal = () => {
        document.getElementById('popup-box-edit').classList.remove('show');

        setAddNoteDescription('');
        setAddNoteTitle('');
    }

    const addANewNote = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('auth-token');
        const response = await fetch('http://localhost:8181/api/notes/addnote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }, body: JSON.stringify({ title: addNoteTitle, description: addNoteDescription })
        });
        const json = await response.json();
        if (json.title) {
            toast.success("Your Note Has Been Added Successfully!");
        }

        closeAddNoteModal();

        setAddNoteTitle('');
        setAddNoteDescription('');

        await getAllNotes();
    }

    const updateNote = async (e) => {
      e.preventDefault();

      const token = sessionStorage.getItem('auth-token');
      const response = await fetch(`http://localhost:8181/api/notes/updatenote/${updateNoteId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': token
          }, body: JSON.stringify({ title: addNoteTitle, description: addNoteDescription })
      });
      const json = await response.json();
      toast.success(json.success);

      await getAllNotes();
      closeEditNoteModal();
    }

    useEffect(() => {
      if (!sessionStorage.getItem('auth-token') || sessionStorage.getItem('auth-token') === "") {
        navigate('/login');
      }
      else {
        setProgress(10);
        getAllNotes();
      }
    // eslint-disable-next-line
    }, [])
    

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Sidenav />
    <section className="home">
      <div className="text">Dashboard</div>

      {/* Add note Modal Starts */}
      <div id='popup-box' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Add a new Note</p>
              <i onClick={closeAddNoteModal} className="uil uil-times"></i>
            </header>
            <form onSubmit={addANewNote} id="notes-form" action="#" enctype="multipart/form-data">
              <div className="row title">
                <label>Title</label>
                <input id='modal-title-input' value={addNoteTitle} onChange={(e) => setAddNoteTitle(e.target.value)} type="text" name="title" spellcheck="false"/>
              </div>
              <div className="row description">
                <label>Description</label>
                <textarea value={addNoteDescription} onChange={(e) => setAddNoteDescription(e.target.value)} name="description" spellcheck="false"></textarea>
              </div>
              <button>Add Note</button>
            </form>
          </div>
        </div>
      </div>
      {/* Add note Modal Ends */}

      {/* Edit note Modal Starts */}
      <div id='popup-box-edit' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Edit Note</p>
              <i onClick={closeEditNoteModal} className="uil uil-times"></i>
            </header>
            <form onSubmit={updateNote} id="notes-form" action="#" enctype="multipart/form-data">
              <div className="row title">
                <label>Title</label>
                <input value={addNoteTitle} onChange={(e) => setAddNoteTitle(e.target.value)} id='modal-title-input' type="text" name="title" spellcheck="false"/>
              </div>
              <div className="row description">
                <label>Description</label>
                <textarea value={addNoteDescription} onChange={(e) => setAddNoteDescription(e.target.value)} name="description" spellcheck="false"></textarea>
              </div>
              <button>Update Note</button>
            </form>
          </div>
        </div>
      </div>
      {/* Edit note Modal Ends */}

      <div className="wrapper">
        <li onClick={openAddNoteModalForNewNote} className="add-box">
          <div className="icon"><i className="uil uil-plus"></i></div>
          <p>Add new note</p>
        </li>


        {notesList.map((note) => {
            const dateStu = note.createdAt;
            return (
                <li id={note._id} key={note._id} className="note">
                    <div className="details">
                        <p>{note.title}</p>
                        <span>{note.description}</span>
                    </div>
                    <div className="bottom-content">
                        <span>{convertToMonthName(new Date(dateStu).getMonth()) + " " + new Date(dateStu).getDate().toString() + ", " + new Date(dateStu).getFullYear()}</span>
                        <div id={`settings-${note._id}`} className="settings">
                            <i onClick={() => openMenu(note._id)} className="uil uil-ellipsis-h"></i>
                            <ul className="menu show">
                                <li onClick={() => openAddNoteModalForEditNote(note._id)}><i className="uil uil-pen"></i>Edit</li>
                                <li onClick={() => deleteNote(note._id)}><i className="uil uil-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        })}


      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </section>
    </>
  )
}

export default Notes