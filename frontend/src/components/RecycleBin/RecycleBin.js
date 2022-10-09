import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Sidenav from '../Sidenav/Sidenav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { RiInboxUnarchiveLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';

const RecycleBin = () => {
    const [progress, setProgress] = useState(0);
    const [notesList, setNotesList] = useState([]);

    const navigate = useNavigate();

    const getDeletedNotes = async (authtoken) => {
        setProgress(20);
        const response = await fetch('http://localhost:8181/api/notes/bin', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authtoken
            }
        });

        setProgress(50);
        
        const json = await response.json();

        setProgress(70);

        setNotesList(json);

        setProgress(100);
    }


    useEffect(() => {
      const authtoken = sessionStorage.getItem('auth-token');
      if (authtoken) {
        getDeletedNotes(authtoken);
      }
      else {
        navigate('/login');
      }
    }, [])
    


  const convertToMonthName = (num) => {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    return months[num];
  }



  const unArchive = async (id) => {
    const authtoken = sessionStorage.getItem('auth-token');
    const response = await fetch(`http://localhost:8181/api/notes/unarchive/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authtoken
      }
    });

    const json = await response.json();
    toast.success(json.success);
    // setNotesList(notesList.filter())
    await getDeletedNotes(authtoken);
  }


  const deletePermanently = async (id) => {
    if (window.confirm('Are You sure you want to delete this note Permanently?')) {
      const authtoken = sessionStorage.getItem('auth-token');
      const response = await fetch(`http://localhost:8181/api/notes/deletenotepermanently/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authtoken
        }
      });
      const json = await response.json();
      toast.success(json.success);
      await getDeletedNotes(authtoken);
    }
  }


  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Sidenav />
    <section className="home">
      <div className="text">Recycle Bin</div>

      <div className="wrapper">


        {notesList && notesList.map((note) => {
            const dateStu = note.createdAt;
            return (
                <li id={note._id} key={note._id} className="note">
                    <div className="details">
                        <p>{note.title}</p>
                        <span>{note.description}</span>
                    </div>
                    <div className="bottom-content">
                        <span>{convertToMonthName(new Date(dateStu).getMonth()) + " " + new Date(dateStu).getDate().toString() + ", " + new Date(dateStu).getFullYear()}</span>
                        <div onClick={() => unArchive(note._id)} id={`settings-${note._id}`} className="settings">
                          <RiInboxUnarchiveLine />
                        </div>
                        <div onClick={() => deletePermanently(note._id)} id={`settings-${note._id}`} className="settings">
                          <AiFillDelete />
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

export default RecycleBin