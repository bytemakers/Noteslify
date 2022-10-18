import React, { useContext, useEffect, useState } from "react";
import "../Notes/Notes.css";
import Sidenav from "../Sidenav/Sidenav";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import Switch from "react-js-switch";
import GlobalContext from "../../context/GlobalContext";
import NotesContext from "../../context/NotesContext";
import { marked } from "marked";
import RenderInWindow from "../Notes/RenderInWindow";
import MarkdownNotes from "../Notes/MarkdownNotes";
import { Helmet } from "react-helmet";
import notesData from "../../data/notesData.json";
import foldersData from "../../data/foldersData.json";

const OpenFolder = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [addNoteTitle, setAddNoteTitle] = useState("");
  const [addNoteDescription, setAddNoteDescription] = useState("");
  const [updateNoteId, setUpdateNoteId] = useState("");
  const [progress, setProgress] = useState(0);
  const [allNotesInLS, setAllNotesInLS] = useState([]);
  const { theme, setTheme } = useContext(GlobalContext);

  //to get folder id
  let { folderid } = useParams();
  folderid = Number(folderid.slice(1));

  const [folderName, setFolderName] = useState(() => {
    for (let i = 0; i < foldersData.length; i++) {
      if (foldersData[i]._id == folderid) {
        return foldersData[i].name;
      }
      if (i == foldersData.length - 1) {
        return "";
      }
    }
  });

  //remove the block of code of useEffect below when switching from localstorage to database through backend
  useEffect(() => {
    //to show some notes at start from static json file
    if (!localStorage.getItem("allNotes")) {
      let allNotes = [];
      let allNotesString = JSON.stringify(allNotes);
      localStorage.setItem("allNotes", allNotesString);
      setAllNotesInLS(allNotes);
    }
    //to show notes from localstorage if any new notes are added
    else {
      let allNotesString = localStorage.getItem("allNotes");
      let allNotes = JSON.parse(allNotesString);
      setAllNotesInLS(allNotes);
    }
  }, []);

  const {
    notes,
    getNotes,
    getNote,
    addNewNote,
    updateExistingNote,
    deleteNote,
  } = useContext(NotesContext);
  const [isAddMarkdownWindowOpen, setIsAddMarkdownWindowOpen] = useState(false);
  const [isEditMarkdownWindowOpen, setIsEditMarkdownWindowOpen] =
    useState(false);

  const openAddNoteModalForNewNote = () => {
    const popupBox = document.getElementById("popup-box");
    popupBox.classList.add("show");
    document.getElementById("modal-title-input").focus();
    // setModalHeading("Add a new Note");
    // const popupTitle = popupBox.querySelector("header p");
    // popupTitle.innerText = "Add a new Note";
    setAddNoteDescription("");
    setAddNoteTitle("");
  };

  const closeAddNoteModal = () => {
    document.getElementById("popup-box").classList.remove("show");
  };

  const closeAddMarkdownWindow = () => {
    if (isAddMarkdownWindowOpen) {
      setIsAddMarkdownWindowOpen(false);
      closeAddNoteModal();
    }
  };

  const closePreviewNoteModal = () => {
    document.getElementById("popup-box-preview").classList.remove("show");
    setAddNoteTitle("");
    setAddNoteDescription("");
  };

  const openAddMarkdownWindow = () => {
    setIsAddMarkdownWindowOpen(true);
    //  closeAddNoteModal();
  };

  const addANewNote = async (e) => {
    e.preventDefault();

    const note = {
      title: addNoteTitle,
      description: addNoteDescription,
      folder: folderName,
    };

    //remove the below code to not add the new note in the main notes page
    const result = await addNewNote(note);
    if (result.title) {
      toast.success("Your Note Has Been Added Successfully!");
    }

    //When switching from localstorage to database through backend, remove the block of code below from here to...
    let allNotesString = localStorage.getItem("allNotes");
    let allNotes = JSON.parse(allNotesString);
    let allFoldersString = localStorage.getItem("allFolders");
    let allFolders = JSON.parse(allFoldersString);
    for (let i = 0; i < allFolders.length; i++) {
      if (allFolders[i]._id == folderid) {
        allFolders[i].noOfFiles += 1;
        break;
      }
    }
    if (allNotes.length < 1) {
      note._id = 1;
    } else {
      note._id = allNotes[allNotes.length - 1]._id + 1;
    }
    allNotes.push(note);
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
    localStorage.setItem("allFolders", JSON.stringify(allFolders));
    setAllNotesInLS(allNotes);
    console.log(allNotesInLS);

    //...here

    closeAddNoteModal();

    setAddNoteTitle("");
    setAddNoteDescription("");

    // await getAllNotes();
  };

  return (
    <>
      <Helmet>
        <title>Noteslify | Dashboard</title>
        <meta
          name="description"
          content="Noteslify. View your files and dashboard here."
        />
      </Helmet>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Sidenav />
      <section className="home">
        <div className="text">
          <span>
            <a href="/folders">Folders</a>
          </span>
          <span>{` > ${folderName}`}</span>
        </div>
        <div id="popup-box" className="popup-box">
          <div className="popup">
            <div className="content">
              <header>
                <p>Add a new Note</p>
                <i
                  className="fa-brands fa-markdown"
                  onClick={openAddMarkdownWindow}
                ></i>
                <i
                  onClick={closeAddNoteModal}
                  className="fa-solid fa-xmark"
                ></i>
              </header>
              <form
                onSubmit={addANewNote}
                id="notes-form"
                action="#"
                encType="multipart/form-data"
              >
                <div className="row title">
                  {/* <label>Title</label> */}
                  <input
                    id="modal-title-input"
                    value={addNoteTitle}
                    onChange={(e) => setAddNoteTitle(e.target.value)}
                    type="text"
                    name="title"
                    spellcheck="false"
                    placeholder="Title"
                  />
                </div>
                <div className="row description">
                  {/* <label>Description</label> */}
                  <textarea
                    value={addNoteDescription}
                    onChange={(e) => setAddNoteDescription(e.target.value)}
                    name="description"
                    spellcheck="false"
                    placeholder="Write notes..."
                  ></textarea>
                </div>
                <button>Add Note</button>
              </form>
              {isAddMarkdownWindowOpen && (
                <RenderInWindow closeMarkdownWindow={closeAddMarkdownWindow}>
                  <MarkdownNotes
                    closeMarkdownWindow={closeAddMarkdownWindow}
                    addNoteTitle={addNoteTitle}
                    setAddNoteTitle={setAddNoteTitle}
                    addNoteDescription={addNoteDescription}
                    setAddNoteDescription={setAddNoteDescription}
                    submitNote={addANewNote}
                  />
                </RenderInWindow>
              )}
            </div>
          </div>
        </div>
        <div className="wrapper">
          <li onClick={openAddNoteModalForNewNote} className="add-box">
            <div className="icon">
              <i className="fa-solid fa-plus"></i>
            </div>
            <p>Add new note</p>
          </li>

          {allNotesInLS.map((note) => {
            // const dateStu = note.createdAt;
            if (note.folder == folderName) {
              return (
                <li id={note._id} key={note._id} className="note">
                  <div className="details">
                    <div
                      dangerouslySetInnerHTML={{ __html: marked(note.title) }}
                    ></div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(note.description),
                      }}
                    ></div>
                  </div>
                  <div className="bottom-content">
                    <span>October 17, 2022</span>
                    <div id={`settings-${note._id}`} className="settings">
                      <i className="fa-solid fa-ellipsis"></i>
                      <ul className="menu show">
                        <li>
                          <i className="fa-solid fa-pen"></i>Edit
                        </li>
                        <li>
                          <i className="fa-regular fa-trash-can"></i>Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </div>
        <ToastContainer
          toastStyle={{ backgroundColor: "#202d40", color: "white" }}
        />
      </section>
    </>
  );
};

export default OpenFolder;
