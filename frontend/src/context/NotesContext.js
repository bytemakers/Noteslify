import React, { createContext, useState } from 'react';

const NotesContext = createContext({});

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const token = sessionStorage.getItem('auth-token');

  const BACKEND = (process.env.NODE_ENV = 'production'
    ? 'https://noteslify.vercel.app'
    : 'http://localhost:8181');
  
  const getNotes = async (search) => {
    let response;

    if (!search) {
      response = await fetch(`${BACKEND}/api/notes/getallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });
    } else {
      response = await fetch(
        `${BACKEND}/api/notes/search/${search}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        }
      );
    }

    const notes = await response.json();
    setNotes(notes);
  };

  const getNote = async (note) => {
    const response = await fetch(
      `${BACKEND}/api/notes/getnote/${note._id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      }
    );

    return await response.json();
  };

  const addNewNote = async (note) => {
    const result = await fetch(`${BACKEND}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify(note),
    });

    return await result.json();
  };

  const updateExistingNote = async (note) => {
    const response = await fetch(
      `${BACKEND}/api/notes/updatenote/${note._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify({
          title: note.title,
          description: note.description,
        }),
      }
    );

    return await response.json();
  };

  const deleteNote = async (note) => {
    const response = await fetch(
      `${BACKEND}/api/notes/deletenote/${note._id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      }
    );

    return await response.json();
  };

  return (
    <>
      <NotesContext.Provider
        value={{
          notes,
          getNotes,
          getNote,
          addNewNote,
          updateExistingNote,
          deleteNote,
        }}
      >
        {children}
      </NotesContext.Provider>
    </>
  );
};

export default NotesContext;
