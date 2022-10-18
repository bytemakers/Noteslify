import React, { useContext, useEffect, useState } from "react";
import "../Notes/Notes.css";
import Sidenav from "../Sidenav/Sidenav";
import { useNavigate } from "react-router-dom";
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
import notes from "../../data/notesData.json";
import foldersData from "../../data/foldersData.json";

const Folders = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [addNoteTitle, setAddNoteTitle] = useState("");
  const [addFolderName, setAddFolderName] = useState("");
  const [addNoteDescription, setAddNoteDescription] = useState("");
  const [updateNoteId, setUpdateNoteId] = useState("");
  const [progress, setProgress] = useState(0);
  const [allFoldersInLS, setAllFoldersInLS] = useState([]);
  const { theme, setTheme } = useContext(GlobalContext);

  //remove the block of code of useEffect below when switching from localstorage to database through backend
  useEffect(() => {
    //to show some notes at start from static json file
    if (!localStorage.getItem("allFolders")) {
      let allFolders = [];
      localStorage.setItem("allFolders", JSON.stringify(allFolders));
      setAllFoldersInLS(allFolders);
    }
    //to show notes from localstorage if any new notes are added
    else {
      let allFoldersString = localStorage.getItem("allFolders");
      let allFolders = JSON.parse(allFoldersString);
      setAllFoldersInLS(allFolders);
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

  const addANewFolder = (e) => {
    e.preventDefault();

    const folder = {
      name: addFolderName,
      noOfFiles: 0,
      isFavourite: false,
    };

    //When switching from localstorage to database through backend, remove the block of code below from here to...

    let allFoldersString = localStorage.getItem("allFolders");
    let allFolders = JSON.parse(allFoldersString);
    if (allFolders.length < 1) {
      folder._id = 1;
    } else {
      folder._id = allFolders[allFolders.length - 1]._id + 1;
    }
    allFolders.push(folder);
    localStorage.setItem("allFolders", JSON.stringify(allFolders));
    setAllFoldersInLS(allFolders);

    //...here

    closeAddNoteModal();

    setAddFolderName("");

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
        <div className="text">Folders</div>
        <div id="popup-box" className="popup-box">
          <div className="popup">
            <div className="content">
              <header>
                <p>Add a new folder</p>
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
                id="notes-form"
                action="#"
                encType="multipart/form-data"
                onSubmit={addANewFolder}
              >
                <div className="row title">
                  {/* <label>Title</label> */}
                  <input
                    id="modal-title-input"
                    value={addFolderName}
                    onChange={(e) => setAddFolderName(e.target.value)}
                    type="text"
                    name="title"
                    spellcheck="false"
                    placeholder="Folder name"
                  />
                </div>
                <button>Add Folder</button>
              </form>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <li onClick={openAddNoteModalForNewNote} className="add-box">
            <div className="icon">
              <i className="fa-solid fa-plus"></i>
            </div>
            <p>Add new folder</p>
          </li>

          {allFoldersInLS.map((folder) => {
            // const dateStu = note.createdAt;
            return (
              <a href={`/folders/:${folder._id}`}>
                <li id={folder._id} key={folder._id} className="note">
                  <div className="details">
                    <div
                      dangerouslySetInnerHTML={{ __html: marked(folder.name) }}
                    ></div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          `No. of files: 
                          ${folder.noOfFiles.toString()}`
                        ),
                      }}
                    ></div>
                  </div>
                  <div className="bottom-content">
                    <span>15 September, 2022</span>
                    <span>
                      {folder.isFavourite ? (
                        <i class="fa-solid fa-heart"></i>
                      ) : (
                        <i class="fa-regular fa-heart icon"></i>
                      )}
                    </span>
                    <div id={`settings-${folder._id}`} className="settings">
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
              </a>
            );
          })}
          {/* {notes.map((note) => {
            // const dateStu = note.createdAt;
            return (
                <li id={note._id} key={note._id} className="note">
                    <div className="details">
                        <div dangerouslySetInnerHTML={{ __html: marked(note.title) }}></div>

                        <div dangerouslySetInnerHTML={{ __html: marked(note.description) }}></div>

                    </div>
                    <div className="bottom-content">
                        <span>Like</span>
                        <div id={`settings-${note._id}`} className="settings">
                            <i className="fa-solid fa-ellipsis"></i>
                            <ul className="menu show">
                                <li><i className="fa-solid fa-pen"></i>Edit</li>
                                <li><i className="fa-regular fa-trash-can"></i>Delete</li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        })} */}
        </div>
        <ToastContainer
          toastStyle={{ backgroundColor: "#202d40", color: "white" }}
        />
      </section>
    </>
  );
};

export default Folders;
